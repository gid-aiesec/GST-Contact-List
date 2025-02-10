import { fetchContactList } from "@/app/actions/api";
import { DataTable } from "./dataTable";
import { columns, columnsAI } from "./columns";

export default async function ContactList({
  regionID,
  termID,
  isAI,
}: {
  regionID: string;
  termID: string;
  isAI?: boolean;
}) {
  if (!isAI) {
    const contactListData = await fetchContactList(regionID, termID);
    if (contactListData) {
      return <DataTable columns={columns} data={contactListData} />;
    } else {
      return (
        <div className="flex flex-col h-screen w-full items-center justify-center">
          <p className="text-[18px] text-red-600 font-semibold">
            Something seems wrong
          </p>
          <p className="text-[13px] text-gray-700">
            Please verify the MC and the term then try again
          </p>
        </div>
      );
    }
  } else {
    const data = [
      {
        fullName: "Arfan Nazar",
        email: "arfan@ai.aiesec.org",
        position: "PAI",
        countryCode: null,
        phoneNum: "@arfan_nazar",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_a.svg",
      },
      {
        fullName: "Thao Le Thi Thanh",
        email: "thaol@ai.aiesec.org",
        position: "VP BD",
        countryCode: null,
        phoneNum: "@bobo_2605",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_t.svg",
      },
      {
        fullName: "Juan David Ospina",
        email: "juandi@ai.aiesec.org",
        position: "BD Manager",
        countryCode: null,
        phoneNum: "@JuanOspina07",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_j.svg",
      },
      {
        fullName: "Melissa Guillen",
        email: "melissag@ai.aiesec.org",
        position: "BD Manager",
        countryCode: null,
        phoneNum: "@melissaguillen",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_m.svg",
      },
      {
        fullName: "Mohammad Abdul Wasay",
        email: "abdulwasay@ai.aiesec.org",
        position: "BD Manager",
        countryCode: null,
        phoneNum: "@abdulwasayyy",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_m.svg",
      },
      {
        fullName: "Kenneth Gamboa Parrales",
        email: "kennethg@ai.aiesec.org",
        position: "VP Brand and PR",
        countryCode: null,
        phoneNum: "@KennethGP",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_k.svg",
      },
      {
        fullName: "Ayesh Rajapaksha",
        email: "ayeshr@ai.aiesec.org",
        position: "Marketing Manager",
        countryCode: null,
        phoneNum: "@ayeshmr",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_a.svg",
      },
      {
        fullName: "Ali Badreddine",
        email: "ali@ai.aiesec.org",
        countryCode: null,
        phoneNum: "@asbadreddine",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_a.svg",
        position: "VP IM",
      },
      {
        fullName: "Eugene Lee",
        email: "eugenel@ai.aiesec.org",
        position: "VP Finance",
        countryCode: null,
        phoneNum: "@oogenelee",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_e.svg",
      },
      {
        fullName: "Sam Williamson",
        email: "samw@ai.aiesec.org",
        position: "Finance Manager",
        countryCode: null,
        phoneNum: "@Sam_Williamson79",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_s.svg",
      },
      {
        fullName: "Minol Jayakody",
        email: "minol@ai.aiesec.org",
        position: "VP OD",
        countryCode: null,
        phoneNum: "@Minol_Jayakody",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_m.svg",
      },
      {
        fullName: "Marta Lourdes Grillo",
        email: "martag@ai.aiesec.org",
        position: "OD Manager - AME",
        countryCode: null,
        phoneNum: "@martasgrillo",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_m.svg",
      },
      {
        fullName: "Tamilla Gambarova",
        email: "tamillag@ai.aiesec.org",
        position: "OD Manager - AP",
        countryCode: null,
        phoneNum: "@tamillag",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_t.svg",
      },
      {
        fullName: "Mohamed Algelany",
        email: "m.algelany@ai.aiesec.org",
        position: "OD Manager - EUR",
        countryCode: null,
        phoneNum: "@MohamedAlgelany",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_m.svg",
      },
      {
        fullName: "Hamma Lahouar",
        email: "hammalahouar@ai.aiesec.org",
        position: "OD Manager - MEA",
        countryCode: null,
        phoneNum: "@HammaLahouar",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_h.svg",
      },
      {
        fullName: "Aleyna Sayin",
        email: "aleynas@ai.aiesec.org",
        position: "VP ELD",
        countryCode: null,
        phoneNum: "@Aleyloy",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_a.svg",
      },
      {
        fullName: "Lishani Suriyampola",
        email: "lishanis@ai.aiesec.org",
        position: "GV Manager",
        countryCode: null,
        phoneNum: "@lishani_suriyampola",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_l.svg",
      },
      {
        fullName: "Leysan Sharafutdinova",
        email: "leysans@ai.aiesec.org",
        position: "GT Manager",
        countryCode: null,
        phoneNum: "@leysanjune",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_l.svg",
      },
      {
        fullName: "Yuya Takahashi",
        email: "yuyat@ai.aiesec.org",
        position: "MX Manager",
        countryCode: null,
        phoneNum: "@yuyaaa0426",
        linkedin: null,
        imageURL: "https://cdn-expa.aiesec.org/gis-img/missing_profile_y.svg",
      },
    ];
    return <DataTable columns={columnsAI} data={data} />;
  }
}
