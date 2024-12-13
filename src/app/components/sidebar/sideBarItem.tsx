"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarMenuButton } from "../ui/sidebar";
import { cn } from "@/lib/utils";

type SubOffice = {
  id: string;
  full_name: string;
};

export function SideBarItem({ subOffice }: { subOffice: SubOffice }) {
  const pathname = usePathname();
  const isActive = pathname === `/mc/${subOffice.id}`;

  return (
    <SidebarMenuButton
      asChild
      isActive={isActive}
      className={cn(
        "text-white hover:bg-white/20 hover:text-white transition-colors duration-200 mt-1 active:bg-white/40 active:text-white data-[active=true]:bg-white/80"
      )}
    >
      <Link href={`/mc/${subOffice.id}`}>
        <div className="w-2 mr-2"></div>
        {subOffice.full_name}
      </Link>
    </SidebarMenuButton>
  );
}
