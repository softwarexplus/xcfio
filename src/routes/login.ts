import { RESTPostOAuth2AccessTokenResult, APIUser } from "discord-api-types/v10"
import { FastifyReply, FastifyRequest } from "fastify"

export async function login(request: FastifyRequest, reply: FastifyReply) {
    const code = (request.query as { code?: string }).code
    if (!code) {
        const params = new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            response_type: "code",
            redirect_uri: process.env.REDIRECT_URI,
            scope: "identify email"
        })

        return reply.redirect(`https://discord.com/api/oauth2/authorize?${params.toString()}`)
    }

    const tokenRes = await fetch(`https://discord.com/api/oauth2/token`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            grant_type: "authorization_code",
            code,
            redirect_uri: process.env.REDIRECT_URI,
            scope: "identify email"
        })
    })

    const tokenData = (await tokenRes.json()) as RESTPostOAuth2AccessTokenResult

    const userRes = await fetch("https://discord.com/api/users/@me", {
        headers: {
            Authorization: `Bearer ${tokenData.access_token}`
        }
    })

    const userData = (await userRes.json()) as APIUser

    console.log(tokenData)
    console.log(userData)

    const jwt = await reply.jwtSign({
        id: userData.id,
        email: userData.email,
        username: userData.username
    })

    reply.setCookie("user", jwt, { signed: true })
    reply.redirect("/application/moderator")
}
