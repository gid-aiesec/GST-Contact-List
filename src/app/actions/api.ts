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

export type UserDataResponse = {
    id: string;
    full_name: string;
    alternate_email: string;
    aiesec_email: string;
    profile_photo: string;
    contact_detail: {
        phone: string;
        country_code: string;
    };
};
export async function fetchRegions(): Promise<RegionResponse | null> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND}/api/regions`,
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
            `${process.env.NEXT_PUBLIC_BACKEND}/api/regions/${regionID}?term=${termID}`,
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
            `${process.env.NEXT_PUBLIC_BACKEND}/api/terms`,
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

export async function getUserData(
    token: string,
): Promise<UserDataResponse | null> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND}/api/user`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ accessToken: token }),
            },
        );
        if (!response.ok) {
            const error = await response.text();
            throw error;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error instanceof Error) {
            throw "Error fetching user data";
        } else {
            throw error;
        }
    }
}
export async function updateUserData(
    token: string,
    id: string,
    data: any,
): Promise<UserDataResponse | null> {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND}/api/user/update/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ accessToken: token, userData: data }),
            },
        );
        if (!response.ok) {
            const error = await response.text();
            throw error;
        }
        const res = await response.json();
        return res.data.updatePerson;
    } catch (error) {
        if (error instanceof Error) {
            throw "Error updating user data";
        } else {
            throw error;
        }
    }
}
