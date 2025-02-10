import { Viewport } from "next";
import CustomTrigger from "../sidebar/customTrigger";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function Header() {
  return (
    <div className="w-screen h-16 bg-[#f8fbfc] flex items-center justify-center md:hidden">
      <CustomTrigger />
    </div>
  );
}
