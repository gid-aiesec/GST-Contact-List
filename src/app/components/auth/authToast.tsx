"use client";

import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function AuthToast({ error }: { error: string }) {
  useEffect(() => {
    if (error && error === "unauthorized")
      toast({ title: "Session expired", description: "Please login again" });
  });
  return null;
}
