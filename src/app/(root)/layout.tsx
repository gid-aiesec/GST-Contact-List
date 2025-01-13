import Header from "@/app/components/header/header";
import "@/app/globals.css";
import { SidebarProvider } from "../components/ui/sidebar";
import AppSideBar from "../components/sidebar/sideBar";
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
        <div className="h-full w-full flex flex-col md:flex-row md:h-screen md:w-screen md:justify-center">
          <Header />
          {children}
        </div>
      </SidebarProvider>
    </div>
  );
}
