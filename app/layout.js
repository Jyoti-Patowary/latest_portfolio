import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DEEP",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{fontFamily: 'inter'}}>{children}</body>
    </html>
  );
}
