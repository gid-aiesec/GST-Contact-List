import AppSideBar from "../components/sidebar/sideBar";
import { SidebarProvider } from "../components/ui/sidebar";
import { Nunito } from "next/font/google";
import "@/app/globals.css";
import "@/styles/customScrollbar.css";
import { Toaster } from "sonner";

const nunito = Nunito({ weight: "300", subsets: ["latin"] });

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-screen">
      <SidebarProvider>
        <AppSideBar className={nunito.className} collapsible="offcanvas" />
        {children}
        <Toaster richColors />
      </SidebarProvider>
    </div>
  );
}
