"use client";
import { useRouter } from "next/navigation";
import React from "react";

function _Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={31}
      height={30}
      fill="none"
      className="ml-3 h-7 w-6"
    >
      <rect width={30} height={30} x={0.922} fill="#fff" rx={7.875} />
      <path
        fill="#037EF2"
        d="M18.292 17.167 17.13 10.97c-.063-.324-.135-.706-.216-1.147a34.47 34.47 0 0 1-.23-1.431c-.198.513-.391.99-.58 1.43l-.5 1.162-2.66 6.183h5.347Zm5.427 7.411h-3.024c-.342 0-.608-.08-.797-.243a1.25 1.25 0 0 1-.391-.634l-.716-3.82h-7.006l-1.647 3.82a1.752 1.752 0 0 1-.54.62 1.418 1.418 0 0 1-.837.257H5.683L15.106 4.99h3.996l4.617 19.588Z"
      />
    </svg>
  );
}

export default function LoginButton() {
  const router = useRouter();
  const handleClick = () => {
    const url = new URL("https://auth.aiesec.org/oauth/authorize");
    url.searchParams.set("response_type", "code");
    url.searchParams.set("client_id", process.env.NEXT_PUBLIC_CLIENT_ID!);
    url.searchParams.set("redirect_uri", process.env.NEXT_PUBLIC_REDIRECT_URI!);
    url.searchParams.set("state", "");
    console.log(url.toString());
    router.replace(url.toString());
  };

  return (
    <button
      onClick={handleClick}
      className="rounded-md py-2.5 px-8 bg-white text-black shadow-lg shadow-[#ffffff2d]"
    >
      <div className="flex flex-row justify-between">
        <p className="pt-0.5">Login with EXPA</p> <_Logo />
      </div>
    </button>
  );
}
