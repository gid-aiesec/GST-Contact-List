import { Suspense } from "react";
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import SideBarSkeleton from "./sideBarSkeleton";
import { SideBarContent } from "./sideBarContent";
import SideBarFooter from "./sideBarFooter";

export default function AppSideBar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="bg-[#037EF2]">
        <div className="text-white text-xl font-semibold px-4 py-2">
          Global Contact List
        </div>
      </SidebarHeader>
      <Suspense fallback={<SideBarSkeleton />}>
        <SideBarContent />
      </Suspense>
      <SideBarFooter />
    </Sidebar>
  );
}
