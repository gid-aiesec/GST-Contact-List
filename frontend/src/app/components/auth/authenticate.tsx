"use client";

import Loading from "@/app/(root)/loading";
import { GetTokenResponse } from "@/app/utils/auth-utils";
import { useRouter } from "next/navigation";
import { use, useEffect } from "react";

export default function Authenticate({
  tokenDataPromise,
}: {
  tokenDataPromise: Promise<GetTokenResponse>;
}) {
  const tokenData = use(tokenDataPromise);
  const router = useRouter();
  useEffect(() => {
    if (tokenData) {
      localStorage.setItem("access_token", tokenData.access_token);
      localStorage.setItem("refresh_token", tokenData.refresh_token);
      localStorage.setItem("expires_in", String(tokenData.expires_in));
      router.replace("/");
    }
  }, [tokenData, router]);

  return <Loading />;
}
