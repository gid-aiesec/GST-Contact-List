import CustomTrigger from "../sidebar/customTrigger";

export default function Header() {
  return (
    <div className="w-full h-16 bg-[#f8fbfc] flex items-center justify-center md:hidden">
      <CustomTrigger />
    </div>
  );
}
