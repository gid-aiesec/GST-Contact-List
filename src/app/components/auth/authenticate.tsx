"use client";

import { GetTokenResponse } from "@/app/utils/auth-utils";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function Authenticate({
  tokenDataPromise,
}: {
  tokenDataPromise: Promise<GetTokenResponse>;
}) {
  const tokenData = use(tokenDataPromise);
  if (tokenData) {
    console.log("token data", tokenData);
    localStorage.setItem("access_token", tokenData.access_token);
    localStorage.setItem("refresh_token", tokenData.refresh_token);
    localStorage.setItem("expires_in", String(tokenData.expires_in));
    useRouter().replace("/");
  } else {
    console.log("no token data");
  }
  return null;
}
