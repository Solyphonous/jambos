import { verifyJWT } from './lib/verifyJWT'

var cachedUnverifiedToken
var cachedToken

export async function handle({ event, resolve }) {
    const unverifiedToken = event.cookies.get("token")

    // Check if user is logged in
    if (!unverifiedToken) {
        event.locals.token = null
        return await resolve(event)
    }

    // Check if user token is the same as last request, if so return cached cookie that wouldve been decoded on first request
    if (unverifiedToken == cachedUnverifiedToken) {
        event.locals.token = cachedToken
        return await resolve(event)
    }

    // Try to decode token on backend
    const token = await verifyJWT(unverifiedToken)

    // If we get a token we cache it and put it in locals for load functions to use
    if (token) {
        cachedUnverifiedToken = unverifiedToken
        cachedToken = token
        event.locals.token = token
    } else {
        event.locals.token = null
    }

    return await resolve(event)
}