"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "../ui/sidebar";
import { SideBarItem } from "./sideBarItem";

type SubOffice = {
  id: string;
  full_name: string;
};

type CollapsibleRegionProps = {
  region: string;
  subOffices: SubOffice[];
};

export function CollapsibleRegion({
  region,
  subOffices,
}: CollapsibleRegionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const currentId = pathname.split("/").pop();
    const isRegionActive = subOffices.some((office) => office.id === currentId);
    setIsActive(isRegionActive);
    if (isRegionActive) {
      setIsOpen(true);
    }
  }, [pathname, subOffices]);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <SidebarGroup>
        <SidebarGroupLabel
          asChild
          className={cn(
            "group/label text-sm text-white hover:bg-white hover:text-blue-500 transition-colors duration-200",
            isActive && "bg-white/20"
          )}
        >
          <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-2">
            {region}{" "}
            <ChevronRight
              className={cn(
                "ml-auto transition-transform",
                isOpen && "rotate-90"
              )}
            />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent
          className={cn(
            "text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          )}
        >
          <SidebarGroupContent>
            <SidebarMenu>
              {subOffices.map((subOffice) => (
                <SidebarMenuItem key={subOffice.id}>
                  <SideBarItem subOffice={subOffice} />
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
