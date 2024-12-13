"use client";

import { useRouter } from "next/navigation";
import Loading from "./loading";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");

    if (accessToken) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  }, [router]);

  return <Loading />;
}
