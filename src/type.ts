declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_ID: string
            CLIENT_SECRET: string
            REDIRECT_URI: string
            URI: string
            JWT_SECRET: string
            COOKIE_SECRET: string
            DATABASE_URI: string
            WEBHOOK: string
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

export interface TokenResponse {
    access_token: string
    token_type: string
    expires_in: number
    refresh_token: string
    scope: string
}

