import { env } from "$env/dynamic/private";

export async function verifyJWT(token) {
    const response = await fetch(`${env.WorkerURL}/verifytoken`, {
                method: "POST",
                headers: {
                    "Authorization": env.WorkersAPIKey,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        token: token
                    }
                ) 
            })
            const data = await response.json()
            if (response.ok) {
                return data.token
            } else {
                return null
            }
}