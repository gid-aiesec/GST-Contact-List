import { fetchRegions } from "@/app/actions/api";
import { cn } from "@/lib/utils";
import { SidebarContent, SidebarGroupLabel } from "../ui/sidebar";
import { Nunito } from "next/font/google";
import { CollapsibleRegion } from "./collapsibleRegion";
import { SideBarAIItem } from "./sideBarAIItem";

const nunito = Nunito({ weight: "300", subsets: ["latin"] });

export async function SideBarContent() {
  const regions = await fetchRegions();

  if (!regions) {
    return null;
  }

  return (
    <SidebarContent
      className={cn("gap-0", nunito.className, "custom-scrollbar")}
      style={{ backgroundColor: "#037EF2" }}
    >
      <SideBarAIItem />
      {Object.entries(regions).map(([region, subOffices]) => (
        <CollapsibleRegion
          key={region}
          region={region}
          subOffices={subOffices}
        />
      ))}
    </SidebarContent>
  );
}
