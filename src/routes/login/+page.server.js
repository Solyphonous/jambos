// Login server

import { env } from "$env/dynamic/private";
import { redirect } from "@sveltejs/kit";

async function getJWT(username, password) {
    const response = await fetch(`${env.WorkerURL}/login`, {
            method: "POST",
            headers: {
                "Authorization": env.WorkersAPIKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    username: username,
                    password: password
                }
            ) 
        })
        const data = await response.json()
        if (response.ok) {
            const token = data.token
            return {
                success: true,
                token: token
            }
        } else {
            return {
                success: false,
                error: data.error
            }
        }    
}

export const actions = {
	default: async ({ request, cookies, url, locals, event }) => {
		const formData = await request.formData()
        const username = formData.get("username")
        const password = formData.get("password")

        const token = await getJWT(username, password)

        if (token.success) {
            cookies.set("token", token.token, { path: "/" })
            redirect(303, url.searchParams.get("redirect") ?? "/")
        } else {
            return { toast: token.error }
        }
        
	}
};

export function load({ locals, url }) {
    if (locals.token) {
        redirect(303, url.searchParams.get("redirect") ?? "/")
    }
}