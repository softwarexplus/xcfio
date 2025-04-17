import { RESTPostAPIWebhookWithTokenJSONBody } from "discord-api-types/v10"
import { FastifyReply, FastifyRequest } from "fastify"
import { ApplicationForm } from "../type"

export async function submit_app(request: FastifyRequest, reply: FastifyReply) {
    try {
        const form = request.body as ApplicationForm
        form.submittedAt = new Date()

        // // Validate form data
        // if (!form.username || !form.discordTag || !form.age || !form.aboutMe || !form.whyJoin) {
        //     return reply.status(400).send({ success: false, message: "Missing required fields" })
        // }

        const payload: RESTPostAPIWebhookWithTokenJSONBody = {
            content: "```json\n" + JSON.stringify(form, null, 4) + "\n```"
        }

        fetch(process.env.WEBHOOK, {
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            method: "POST"
        })

        return reply.send({ success: true, message: "Application submitted successfully!" })
    } catch (error) {
        request.log.error(error)
        return reply.status(500).send({ success: false, message: "Internal server error" })
    }
}
