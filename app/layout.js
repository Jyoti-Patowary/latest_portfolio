import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

// const poppins = Poppins({ subsets: ["latin"] });

export const metadata = {
  title: "Jyoti Patowary",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2MXBVN9329"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-2MXBVN9329');
        `}
      </Script>
      <body style={{fontFamily: 'poppins'}}>{children}</body>
    </html>
  );
}
