import LoginButton from "../../components/auth/loginButton";
import AuthToast from "@/app/components/auth/authToast";
export default async function Login({
  searchParams,
}: {
  searchParams?: Promise<{ [key: string]: string | undefined }>;
}) {
  const error = (await searchParams)?.error;
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-[#037EF3]">
      {error && <AuthToast error={error} />}
      <LoginButton />
    </div>
  );
}
