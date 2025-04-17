import { FastifyReply, FastifyRequest } from "fastify"
import { moderator_application } from "../public"

export async function moderator_app(request: FastifyRequest, reply: FastifyReply) {
    if (!request.cookies.user) reply.redirect("/login")
    reply.type("text/html").send(moderator_application({ email: "D", id: "123", username: "D" }))
}
