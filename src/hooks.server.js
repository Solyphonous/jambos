import { verifyJWT } from './lib/verifyJWT'

export async function handle({ event, resolve }) {
    const unverifiedToken = event.cookies.get("token")

    if (!unverifiedToken) {
        event.locals.token = null
        return await resolve(event)
    }

    if (!event.locals.token) {
        const token = await verifyJWT(unverifiedToken)

        if (token) {
            console.log(`Got decoded token: ${JSON.stringify(token)}`)
            event.locals.token = token
        } else {
            event.locals.token = null
        }
    }

    return await resolve(event)
}