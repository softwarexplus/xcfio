import { TokenResponse } from "../type"

export async function RefreshToken(refreshToken: string): Promise<TokenResponse> {
    try {
        const params = new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: "refresh_token",
            refresh_token: refreshToken
        })

        const response = await fetch("https://discord.com/api/oauth2/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        })

        return (await response.json()) as any
    } catch (error) {
        console.error("Error refreshing Discord token:", error)
        throw error
    }
}
