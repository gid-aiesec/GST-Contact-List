import { fetchContactList } from "@/app/actions/regions";
import { DataTable } from "./dataTable";
import { columns } from "./columns";

export default async function ContactList({ regionID }: { regionID: number }) {
  const contactListData = await fetchContactList(regionID);
  if (contactListData) {
    return <DataTable columns={columns} data={contactListData} />;
  }
  return null;
}
