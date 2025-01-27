import { env } from "$env/dynamic/private";

export const actions = {
	default: async ({ request, cookies, url, locals, event }) => {
		const formData = await request.formData()
        const cookie = cookies.get("token")
        var formObject = {}

        for (const pair of formData.entries()) {
            formObject[pair[0]] = pair[1]
        }

        const response = await fetch(`${env.WorkerURL}/upload_article`, {
                    method: "POST",
                    headers: {
                        "Authorization": env.WorkersAPIKey,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(
                        {
                            article: formObject,
                            token: cookie
                        }
                    ) 
                })
                const data = await response.json()
                if (response.ok) {
                    return {
                        toast: "Successfully uploaded article!"
                    }
                } else {
                    return {
                        toast: "Failed to upload article."
                    }
                } 
	}
};