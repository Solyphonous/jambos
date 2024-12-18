// Login server

import { env } from "$env/dynamic/private";
import { redirect } from "@sveltejs/kit";

async function getJWT(username, password) {
    const response = await fetch(`https://jambos-worker.jopogb.workers.dev/login`, {
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
            console.log(`Success! Token: ${token}`)
            return {
                success: true,
                token: token
            }
        } else {
            console.error(`Error from login server: ${data.error}`)
            return {
                success: false
            }
        }    
}

export const actions = {
	default: async ({ request, cookies, url }) => {
		const formData = await request.formData()
        const username = formData.get("username")
        const password = formData.get("password")
        console.log(`Username: ${username}\nPassword: ${password}`)

        const token = await getJWT(username, password)

        if (token.success) {
            cookies.set("login", token.token, { path: "/" })
            redirect(303, url.searchParams.get("redirect") ?? "/")
        }
        
	}
};

export function load({ cookies, url }) {
    if (cookies.get("login")) {
        redirect(303, url.searchParams.get("redirect") ?? "/")
    }
}