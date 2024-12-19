import { verifyJWT } from './lib/verifyJWT'

export async function handle({ event, resolve }) {
    const unverifiedToken = event.cookies.get("token")

    // Check if user is logged in
    if (!unverifiedToken) {
        event.locals.token = null
        return await resolve(event)
    }

    // Try to decode token on backend
    const token = await verifyJWT(unverifiedToken)

    if (token) {
        event.locals.token = token
    } else {
        event.locals.token = null
    }

    return await resolve(event)
}