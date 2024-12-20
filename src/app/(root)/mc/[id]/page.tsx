import Loading from "@/app/(root)/loading";
import ContactList from "@/app/components/contactlist/contactList";
import { Suspense } from "react";

export default async function ContactListPage({
  params,
  searchParams,
}: {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  let hasError = false;
  const id = (await params).id;
  const term = (await searchParams).term;
  return (
    <Suspense fallback={<Loading />}>
      {id && term ? (
        <ContactList regionID={id} termID={term} />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <p>No term was selected</p>
        </div>
      )}
    </Suspense>
  );
}
