import { env } from "$env/dynamic/private";

async function getNews() {
    const response = await fetch("https://jambos-worker.jopogb.workers.dev/api/list", {
        headers: {
            "Authorization": env.WorkersAPIKey
        }
    })
    const data = response.json()
    if (response.ok) {
        return data
    } else {
        return [
            {"name": "Error fetching articles: ${data.error}"}
        ]
    }
}

export async function load () {
    let news = await getNews()

    return {
        articles: news
    }
}