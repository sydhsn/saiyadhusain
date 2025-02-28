import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saiyad Husain | AI & Frontend Developer Portfolio",
  description:
    "Saiyad Husain's portfolio showcasing AI chatbot features, frontend development expertise, and cutting-edge web technologies.",
  keywords:
    "Saiyad Husain, AI, Frontend Developer, Full-Stack Developer, ReactJS, Next.js, JavaScript, TypeScript, TensorFlow.js, Web Development, Machine Learning, Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Saiyad Husain Portfolio"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR_TRACKING_ID');
          `}
        </Script>
      </head>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
