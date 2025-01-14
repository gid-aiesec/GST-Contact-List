"use client";

import {
  getUserData,
  updateUserData,
  UserDataResponse,
} from "@/app/actions/api";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { CheckIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";

export default function SideBarUser() {
  const [userData, setUserData] = useState<UserDataResponse | null>(null);
  const [updating, setUpdating] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    getUserData(token)
      .then((value) => {
        setUserData(value);
        if (value != null) localStorage.setItem("user", JSON.stringify(value));
      })
      .catch((e) => {
        if (typeof e === "string" && e === "Unauthorized") {
          localStorage.removeItem("access_token");
          localStorage.removeItem("user");
          window.location.replace("/auth/login?error=unauthorized");
        } else {
          console.error(e);
          toast({
            title: "Error",
            description: "Error fetching user data, try again later",
          });
        }
      });
  }, []);

  async function search(formData: FormData) {
    setSuccess(null);
    setUpdating(true);
    const alternate_email = formData.get("altEmail");
    const country_code = formData.get("countryCode");
    const phone = formData.get("phone");
    if (!alternate_email || !country_code || !phone) {
      setError("Some fields were left empty, reverting to previous data");
      setSuccess(false);
      setUpdating(false);
      return;
    }
    try {
      const response = await updateUserData(
        localStorage.getItem("access_token")!,
        userData!.id,
        {
          alternate_email: `${alternate_email}`,
          country_code: `${country_code}`,
          phone: `${phone}`,
        }
      );
      setSuccess(true);
      console.log("RESPONSE : ", response);
      setUserData(response);
    } catch (e) {
      if (typeof e === "string" && e === "Unauthorized") {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
        window.location.replace("/auth/login?error=unauthorized");
      }
      setError(e as string);
      setSuccess(false);
    } finally {
      setUpdating(false);
    }
  }

  if (userData == null) {
    return (
      <div className="flex items-center justify-center">
        <svg
          className="animate-spin h-8 w-8 text-blue-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setSuccess(null);
          setError("");
          setUpdating(false);
        }
      }}
    >
      <DialogTrigger asChild>
        <div className="pl-1 flex flex-row items-center cursor-pointer ">
          <Image
            src={userData.profile_photo}
            alt="Profile"
            width={35}
            height={35}
            className="rounded-full"
          />
          <p className="pl-3 text-white font-semibold text-[14px]">
            {userData.full_name}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
          <DialogDescription>
            You can edit your information here
          </DialogDescription>
        </DialogHeader>
        <form action={search}>
          <div className="flex flex-col items-start justify-start">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <p className="text-sm">Full Name</p>
              <Input
                name="fullName"
                readOnly
                defaultValue={userData.full_name}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
              <p className="text-sm">AIESEC Email</p>
              <Input
                name="aiesecEmail"
                readOnly
                defaultValue={userData.aiesec_email}
              />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 pt-4">
              <p className="text-sm">Alternate Email</p>
              <Input name="altEmail" defaultValue={userData.alternate_email} />
            </div>
            <div className="flex flex-row w-full max-w-sm items-center justify-around pt-4 gap-6">
              <div className="flex flex-row gap-3 items-center w-fit">
                <p className="text-sm text-nowrap">Country Code</p>
                <Input
                  name="countryCode"
                  className="w-sm"
                  defaultValue={userData.contact_detail.country_code}
                />
              </div>
              <div className="flex flex-row gap-3 items-center w-fit">
                <p className="text-sm">Phone</p>
                <Input
                  name="phone"
                  className="w-md"
                  defaultValue={userData.contact_detail.phone}
                />
              </div>
            </div>
          </div>
          <DialogFooter className="sm:justify-center gap-12 pt-8">
            <DialogClose asChild>
              <button
                type="button"
                className="rounded-md py-1.5 w-28 border-2 border-gray-100 hover:bg-gray-50"
              >
                Close
              </button>
            </DialogClose>
            <button
              type="submit"
              className="rounded-md py-1.5 px-2 w-36 border-2 bg-[#1B1B1B] text-white hover:bg-[#323232]"
            >
              <>
                {updating ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                ) : success != null && success ? (
                  <div className="flex justify-center items-center">
                    <CheckIcon />
                  </div>
                ) : (
                  "Save"
                )}
              </>
            </button>
          </DialogFooter>
        </form>
        {success != null && !success && (
          <p className="text-red-500 pt-4">{error}</p>
        )}
      </DialogContent>
    </Dialog>
  );
}
