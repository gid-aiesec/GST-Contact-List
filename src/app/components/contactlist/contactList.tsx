import { fetchContactList } from "@/app/actions/regions";
import { DataTable } from "./dataTable";
import { columns } from "./columns";

export default async function ContactList({ regionID }: { regionID: number }) {
  const contactListData = await fetchContactList(regionID);
  if (contactListData) {
    return (
      <div className="container mx-auto">
        <DataTable columns={columns} data={contactListData} />
      </div>
    );
  }
  return null;
}
