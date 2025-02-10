import { Suspense } from "react";
import Loading from "../(root)/loading";
import { getAccessTokenFromOauth } from "../utils/auth-utils";
import Authenticate from "../components/auth/authenticate";

export default async function Auth({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const code = (await searchParams).code;
  const tokenData = getAccessTokenFromOauth(code!);
  return (
    <Suspense fallback={<Loading />}>
      <Authenticate tokenDataPromise={tokenData} />
    </Suspense>
  );
}
