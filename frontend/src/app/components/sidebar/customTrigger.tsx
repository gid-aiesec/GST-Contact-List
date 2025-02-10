"use client";
import { useSidebar } from "@/app/components/ui/sidebar";
import { Menu } from "lucide-react";

export default function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Menu
      size={20}
      onClick={toggleSidebar}
      className={"cursor-pointer md:hidden"}
    />
  );
}
