"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/(root)/loading";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      setIsAuthenticated(1);
      router.replace("/auth/login");
    } else {
      setIsAuthenticated(1);
    }
  }, [router]);

  if (isAuthenticated === 0) {
    return <Loading />;
  }

  return <>{children}</>;
}
