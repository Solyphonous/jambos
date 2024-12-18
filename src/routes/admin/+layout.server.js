import { redirect } from '@sveltejs/kit'
import jwt from "jsonwebtoken"
import { env } from "$env/dynamic/private";

export function load({ cookies }) {
    const token = cookies.get("login")

    if (!token) {
        redirect(302, "/login?redirect=admin")
    }

    var logintoken

    try {
        logintoken = jwt.verify(token, env.JWTSigningKey, { algorithm: "HS256" })
    } catch {
        console.warn("Cookie invalid")
        redirect(302, "/")
    }

    if (logintoken.rank < 250) {
        console.warn("Rank too low")
        redirect(302, "/")
    }

    return { token: logintoken }
}