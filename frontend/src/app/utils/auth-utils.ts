export type GetTokenResponse = {
    access_token: string;
    refresh_token: string;
    expires_in: number;
};

export async function getAccessTokenFromOauth(
    code: string,
): Promise<GetTokenResponse> {
    const requestData = {
        grant_type: "authorization_code",
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
        client_secret: process.env.CLIENT_SECRET!,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
        code: code,
    };

    return await fetch("https://auth.aiesec.org/oauth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    }).then(async (response) => {
        if (response.status != 200) {
            console.error(await response.json());
            throw new Error("Error getting access token");
        }
        return await response.json();
    }).catch((error) => {
        console.error(error);
        throw error;
    });
}
