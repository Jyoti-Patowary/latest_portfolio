import "./globals.css";
import Script from "next/script";
import Loader from "./components/loader";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://jyotipatowary.dev"),
  title: "Jyoti Patowary | Full-Stack Developer & Digital Craftsman",
  description: "Portfolio of Jyoti Patowary — Full-stack developer building high-impact web applications with Next.js, React, Node.js, and modern digital design.",
  keywords: ["Jyoti Patowary", "Web Developer", "Next.js", "React", "Full Stack Developer", "Portfolio", "Freelance Developer"],
  authors: [{ name: "Jyoti Patowary" }],
  creator: "Jyoti Patowary",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "500x500", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Jyoti Patowary | Full-Stack Developer",
    description: "Building high-performance digital experiences and robust web applications.",
    url: "https://jyotipatowary.dev",
    siteName: "Jyoti Patowary Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body>
        <Loader />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2MXBVN9329" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2MXBVN9329');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
