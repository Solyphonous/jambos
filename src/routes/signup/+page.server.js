// Sign up server

import { env } from "$env/dynamic/private";
import { redirect } from "@sveltejs/kit";

async function signUp(username, password) {
    const response = await fetch(`https://jambos-worker.jopogb.workers.dev/signup`, {
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
            return {
                success: true,
            }
        } else {
            return {
                success: false,
                error: data.error
            }
        }    
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
        const username = formData.get("username")
        const password = formData.get("password")

        const signupSuccess = await signUp(username, password)

        if (signupSuccess.success) {
            redirect(303, "/login")
        } else {
            return { toast: signupSuccess.error }
        }
	}
};

export function load({ cookies, url }) {
    if (cookies.get("token")) {
        redirect(303, url.searchParams.get("redirect") ?? "/")
    }
}