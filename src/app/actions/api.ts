export type RegionResponse = {
    [key: string]: {
        id: string;
        full_name: string;
        isActive: boolean;
    }[];
};

type TermType = {
    id: string;
    name: string;
};
export type TermResponse = {
    terms: TermType[];
    currentTerm: TermType;
};
export async function fetchRegions(): Promise<RegionResponse | null> {
    try {
        const response = await fetch(
            "https://gst-contact-list-backend.onrender.com/api/regions",
            {
                next: { revalidate: 60 * 15 },
            },
        );
        if (!response.ok) return null;
        const data = await response.json() as RegionResponse;
        return data;
    } catch (error) {
        console.error("Error fetching regions:", error);
        return null;
    }
}

export async function fetchContactList(regionID: string, termID: string) {
    try {
        const response = await fetch(
            `https://gst-contact-list-backend.onrender.com/api/regions/${regionID}?term=${termID}`,
            {
                next: { revalidate: 60 * 15 },
            },
        );
        if (!response.ok) return null;
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching contact list:", error);
        return null;
    }
}
export async function getTerms(): Promise<TermResponse | null> {
    try {
        const response = await fetch(
            "https://gst-contact-list-backend.onrender.com/api/terms",
            {
                next: { revalidate: 3600 * 24 * 7 },
            },
        );
        if (!response.ok) return null;
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching terms:", error);
        return null;
    }
}
