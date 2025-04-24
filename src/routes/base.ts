import { FastifyReply, FastifyRequest } from "fastify"
import { base as html } from "../public/base"

export async function base(request: FastifyRequest, reply: FastifyReply) {
    reply.type("text/html").send(html())
}
