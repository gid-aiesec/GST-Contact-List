import Loading from "@/app/(root)/loading";
import ContactList from "@/app/components/contactlist/contactList";
import { Suspense } from "react";

export default async function ContactListPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Suspense fallback={<Loading />}>
      <ContactList regionID={parseInt(id)} />
    </Suspense>
  );
}
