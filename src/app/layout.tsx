import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AIESEC Global Contact List",
  description: "AIESEC Global Contact List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
