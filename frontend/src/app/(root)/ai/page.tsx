import ContactList from "@/app/components/contactlist/contactList";

export default async function AIContactListPage() {
  return (
    <div className="flex h-screen flex-col w-full items-center justify-center">
      <ContactList regionID={""} termID={""} isAI />
    </div>
  );
}
