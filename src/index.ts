import { base, login, moderator_app, submit_app } from "./routes"
import formbody from "@fastify/formbody"
import cookie from "@fastify/cookie"
import jwt from "@fastify/jwt"
import Router from "fastify"

export const fastify = Router()
export default fastify

fastify.register(formbody)
fastify.register(cookie, { secret: process.env.COOKIE_SECRET })
fastify.register(jwt, {
    secret: process.env.JWT_SECRET,
    cookie: {
        cookieName: "user",
        signed: true
    }
})

fastify.get("/", base)
fastify.get("/login", login)
fastify.post("/submit", submit_app)
fastify.get("/application/moderator", moderator_app)

