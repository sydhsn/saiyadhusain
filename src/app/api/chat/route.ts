import OpenAI from "openai";
import { SYSTEM_PROMPT } from "@/data/profile";

// Groq is OpenAI-compatible — we just point the SDK at its base URL.
// Created lazily inside the handler so a missing key doesn't crash the
// build (the SDK throws on construction when no key is present).
function getClient() {
  return new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });
}

// Groq's fast, free-tier-friendly model. Swap if you like.
const MODEL = "llama-3.3-70b-versatile";

type ChatMessage = { role: "user" | "assistant"; content: string };

// --- Tiny in-memory rate limiter (per IP). Resets on server restart. ---
// Good enough for a portfolio; use Upstash/Redis if you need durability.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 15;
const hits = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_PER_WINDOW;
}

export async function POST(request: Request) {
  if (!process.env.GROQ_API_KEY) {
    return new Response("GROQ_API_KEY is not configured.", { status: 500 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return new Response("Too many requests. Please wait a moment.", {
      status: 429,
    });
  }

  let messages: ChatMessage[];
  try {
    const body = await request.json();
    messages = Array.isArray(body?.messages) ? body.messages : [];
  } catch {
    return new Response("Invalid request body.", { status: 400 });
  }

  // Keep context small and safe: last 10 turns, trimmed content.
  const trimmed = messages
    .filter((m) => m && (m.role === "user" || m.role === "assistant") && m.content)
    .slice(-10)
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 2000) }));

  if (trimmed.length === 0) {
    return new Response("No message provided.", { status: 400 });
  }

  try {
    const client = getClient();
    const stream = await client.chat.completions.create({
      model: MODEL,
      stream: true,
      temperature: 0.4,
      max_tokens: 500,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed],
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const token = chunk.choices[0]?.delta?.content;
            if (token) controller.enqueue(encoder.encode(token));
          }
        } catch {
          controller.enqueue(
            encoder.encode(" [stream interrupted, please try again]")
          );
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Groq chat error:", error);
    return new Response("The assistant is unavailable right now.", {
      status: 502,
    });
  }
}
