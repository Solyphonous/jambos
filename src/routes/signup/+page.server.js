// Sign up server

import { env } from "$env/dynamic/private";

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
            const token = data.token
            console.log(`Success! Token: ${token}`)
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

        const token = await getJWT(username, password)

        if (token.success) {
            return {
                token: token
            }
        }
	}
};