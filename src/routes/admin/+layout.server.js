import { redirect } from '@sveltejs/kit'

export function load({ locals }) {
    const token = locals.token

    if (!token) {
        redirect(302, "/login?redirect=admin")
    }

    if (token.rank < 250) {
        redirect(302, "/")
    }

    return { token: token }
}