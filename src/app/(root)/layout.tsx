import Header from "@/app/components/header/header";
import "@/app/globals.css";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Header />
      {children}
    </div>
  );
}
