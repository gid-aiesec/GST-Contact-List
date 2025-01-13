"use client";

import { toast } from "@/hooks/use-toast";
import { useEffect } from "react";

export default function AuthToast({ error }: { error: string }) {
  if (error && error === "unauthorized") {
    useEffect(() => {
      toast({
        duration: 2000,
        title: "Session expired",
        description: "Please login again",
      });
    });
  }
  return null;
}
