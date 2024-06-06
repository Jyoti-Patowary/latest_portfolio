import { Poppins } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({ subsets: ["latin"] });

export const metadata = {
  title: "DEEP",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{fontFamily: 'poppins'}}>{children}</body>
    </html>
  );
}
