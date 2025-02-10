"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SidebarMenuButton } from "../ui/sidebar";
import Link from "next/link";

export function SideBarAIItem() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const currentId = pathname.split("/").pop();
    setIsActive(currentId === "ai");
  }, [pathname]);

  return (
    <div className="px-2">
      <SidebarMenuButton
        asChild
        isActive={isActive}
        className={cn(
          "group/label text-sm text-white hover:bg-white hover:text-blue-500 transition-colors duration-200 ",
          isActive && "bg-white/20"
        )}
      >
        <Link href={`/ai`} className="pl-4">
          AIESEC International
        </Link>
      </SidebarMenuButton>
    </div>
  );
}
