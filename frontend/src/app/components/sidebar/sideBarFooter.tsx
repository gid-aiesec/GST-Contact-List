import { getTerms } from "@/app/actions/api";
import { SidebarFooter, SidebarMenu, SidebarMenuItem } from "../ui/sidebar";
import { SideBarFooterMenu } from "./sideBarFooterMenu";
import SideBarUser from "./sideBarUser";

export default async function SideBarFooter() {
  const terms = await getTerms();
  return (
    <SidebarFooter className="bg-[#037EF2] border-t-[#FFFFFF50] border-t-[1px]">
      <SidebarMenu>
        <SidebarMenuItem>
          <SideBarFooterMenu terms={terms} />
        </SidebarMenuItem>
      </SidebarMenu>
      <SidebarMenu>
        <SidebarMenuItem>
          <SideBarUser />
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
