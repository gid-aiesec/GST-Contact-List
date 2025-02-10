import { SidebarContent, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { Skeleton } from "../ui/skeleton";

export default function SideBarSkeleton() {
  return (
    <SidebarContent className="gap-1" style={{ backgroundColor: "#037EF2" }}>
      <SidebarMenu>
        {Array.from({ length: 4 }).map((_, index) => (
          <SidebarMenuItem key={index} className="gap-2">
            <Skeleton className="ml-2 w-[90%] h-5 rounded-md mt-4" />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
}
