declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_ID: string
            CLIENT_SECRET: string
            REDIRECT_URI: string
            WEBHOOK: string

            URI: string
            JWT_SECRET: string
            COOKIE_SECRET: string
            SALT: string
        }
    }
}

export interface ApplicationForm {
    username: string
    discordTag: string
    age: number
    aboutMe: string
    whyJoin: string
    interests: string
    experience: string
    submittedAt: Date
}

export type User = {
    id: string
    username: string
    avatar: string
    discriminator: string
    public_flags: number
    flags: number
    banner: null | string
    accent_color: number | null
    global_name: string
    avatar_decoration_data: {
        asset: string
        sku_id: string
        expires_at: number
    }
    collectibles: null | string
    banner_color: null | string
    clan: null | string
    primary_guild: null | string
    mfa_enabled: boolean
    locale: string
    premium_type: number
    email: string
    verified: boolean
}

export type Token = {
    token_type: string
    access_token: string
    expires_in: number
    refresh_token: string
    scope: string
}

