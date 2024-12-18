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
            console.error(`Error from signup server: ${data.error}`)
            return {
                success: false
            }
        }    
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
        const username = formData.get("username")
        const password = formData.get("password")
        console.log(`Username: ${username}\nPassword: ${password}`)

        const signupSuccess = await signUp(username, password)

        if (signupSuccess.success) {
            console.log("Account successfully created.")
            redirect(303, "/login")
        }
	}
};

export function load({ cookies, url }) {
    if (cookies.get("login")) {
        redirect(303, url.searchParams.get("redirect") ?? "/")
    }
}