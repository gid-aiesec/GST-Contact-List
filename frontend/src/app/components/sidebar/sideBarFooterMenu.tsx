"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { TermResponse } from "@/app/actions/api";
import { usePathname, useRouter } from "next/navigation";
import useSharedTerm from "@/app/stores/useSharedTerm";

export function SideBarFooterMenu({
  terms: termsResponse,
}: {
  terms: TermResponse | null;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const setSharedSelectedTermId = useSharedTerm((state) => state.setValue);
  const sharedSelectedTermId = useSharedTerm((state) => state.value);
  if (sharedSelectedTermId === "")
    setSharedSelectedTermId(termsResponse?.currentTerm.id || "");
  const handleChange = (value: string) => {
    setSharedSelectedTermId(value);
    if (pathname.includes("mc")) router.replace(`${pathname}?term=${value}`);
  };
  return (
    <div className="flex flex-row items-center">
      <p className="pl-3 text-white font-semibold text-[14px]">Term </p>
      <Select
        defaultValue={termsResponse?.currentTerm.id}
        onValueChange={handleChange}
        disabled={!termsResponse}
      >
        <SelectTrigger className="border-0 bg-transparent focus:ring-0 focus:ring-offset-0 text-white">
          <SelectValue
            placeholder={termsResponse ? undefined : "Failed to fetch terms"}
          />
        </SelectTrigger>
        {termsResponse && (
          <SelectContent>
            <SelectGroup>
              {termsResponse.terms.map((term) => (
                <SelectItem key={term.id} value={term.id}>
                  {term.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        )}
      </Select>
    </div>
  );
}
