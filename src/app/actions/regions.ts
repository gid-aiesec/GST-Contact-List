export type RegionResponse = {
    [key: string]: {
        id: string;
        full_name: string;
        isActive: boolean;
    }[];
};
export async function fetchRegions(): Promise<RegionResponse | null> {
    try {
        const response = await fetch("http://localhost:4000/api/regions", {
            next: { revalidate: 60 * 5 },
        });
        const data = await response.json() as RegionResponse;
        return data;
    } catch (error) {
        console.error("Error fetching regions:", error);
        return null;
    }
}

export async function fetchContactList(regionID: number) {
    try {
        const response = await fetch(
            `http://localhost:4000/api/regions/${regionID}`,
            {
                next: { revalidate: 60 * 5 },
            },
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching contact list:", error);
        return null;
    }
}
