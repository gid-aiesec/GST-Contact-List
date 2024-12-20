import { fetchContactList } from "@/app/actions/api";
import { DataTable } from "./dataTable";
import { columns } from "./columns";

export default async function ContactList({
  regionID,
  termID,
}: {
  regionID: string;
  termID: string;
}) {
  const contactListData = await fetchContactList(regionID, termID);
  if (contactListData) {
    return <DataTable columns={columns} data={contactListData} />;
  }
  return (
    <div className="flex flex-col h-full w-full items-center justify-center">
      <p className="text-[18px] text-red-600 font-semibold">
        Something seems wrong
      </p>
      <p className="text-[13px] text-gray-700">
        Please verify the MC and the term then try again
      </p>
    </div>
  );
}
