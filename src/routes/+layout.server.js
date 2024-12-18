// Root server

import jwt from "jsonwebtoken"
import { env } from "$env/dynamic/private";

export async function load({ cookies }) {
    let token = cookies.get("login")
    try {
        const logintoken = jwt.verify(token, env.JWTSigningKey, { algorithm: "HS256" })
        return { token: logintoken }
    } catch {
        return { token: null }
    }
}