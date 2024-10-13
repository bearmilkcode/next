import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import{Noto_Sans} from 'next/font/google'

const font = Noto_Sans ({subsets:['latin']})

export const metadata: Metadata = {
  title: "NextSandwich",
  description: "Make your own sandwich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className}`}
        >
        {children}
      </body>
    </html>
  );
}
