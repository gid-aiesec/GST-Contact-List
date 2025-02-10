"use client";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
export default function Home(
  {
    searchParams,
  }: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
  }
) {
  const router = useRouter();

  useEffect(() => {
    console.log("spssasaa  ", searchParams)
    debugger;
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      router.replace("/auth/login");
    }
  }, []);

  return (
    <div
      className={cn(
        inter.className,
        "flex flex-col items-center space-y-2 w-full h-screen justify-center"
      )}
    >
      <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
        Nothing yet selected
      </p>
      <p className="text-sm md:text-base lg:text-lg text-gray-500">
        Please use the sidebar to your left to select an MC.
      </p>
    </div>
  );
}
