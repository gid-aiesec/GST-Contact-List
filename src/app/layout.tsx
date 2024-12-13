import type { Metadata } from "next";
import "./globals.css";
import "@/styles/customScrollbar.css";
import { SidebarProvider } from "./components/ui/sidebar";
import { Toaster } from "sonner";
import AppSideBar from "./components/sidebar/sideBar";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "AIESEC Global Contact List",
  description: "AIESEC Global Contact List",
};

const nunito = Nunito({ weight: "300", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSideBar className={nunito.className} collapsible="offcanvas" />
          {children}
          <Toaster richColors />
        </SidebarProvider>
      </body>
    </html>
  );
}
