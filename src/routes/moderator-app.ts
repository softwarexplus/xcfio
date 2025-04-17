import { FastifyReply, FastifyRequest } from "fastify"
import { moderator_application } from "../public"

export async function moderator_app(request: FastifyRequest, reply: FastifyReply) {
    const { user } = request.cookies
    if (!user) reply.redirect("/login")

    const { id, email, username } = (await request.jwtVerify()) as { id: string; email: string; username: string }
    reply.type("text/html").send(moderator_application({ id, email, username }))
}
