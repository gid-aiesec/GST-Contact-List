import Header from "@/app/components/header/header";
import "@/app/globals.css";
import { SidebarProvider } from "../components/ui/sidebar";
import AppSideBar from "../components/sidebar/sideBar";
import { Toaster } from "sonner";
import { Nunito } from "next/font/google";

const nunito = Nunito({ weight: "300", subsets: ["latin"] });

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SidebarProvider>
        <AppSideBar className={nunito.className} collapsible="offcanvas" />
        <div className="h-full w-full flex flex-col md:h-screen md:w-screen md:justify-center">
          <Header />
          {children}
        </div>

        <Toaster richColors />
      </SidebarProvider>
    </div>
  );
}
