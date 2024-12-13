import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function HomeComponent() {
  return (
    <div
      className={cn(
        inter.className,
        "flex flex-col items-center justify-center h-screen w-screen space-y-2"
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
