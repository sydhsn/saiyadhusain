import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PROFILE } from "@/data/profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${PROFILE.name} | ${PROFILE.role}`,
  description: PROFILE.summaryShort,
  keywords: [
    PROFILE.name,
    "Senior Frontend Tech Lead",
    "React.js",
    "Next.js",
    "TypeScript",
    "NestJS",
    "Frontend Architecture",
    "AWS",
    "E-Commerce",
    "Portfolio",
  ],
  authors: [{ name: PROFILE.name, url: PROFILE.links.linkedin }],
  // Keep the site out of search engines (no indexing, no following links).
  robots: { index: false, follow: false, nocache: true },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: PROFILE.name,
  },
  openGraph: {
    title: `${PROFILE.name} | ${PROFILE.role}`,
    description: PROFILE.summaryShort,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#3345a4" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1020" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
