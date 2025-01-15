import type { Metadata } from "next";
import "./globals.css";
import "@/styles/customScrollbar.css";
import { Toaster } from "./components/ui/toaster";

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
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
