import { env } from "$env/dynamic/private";

async function getNews() {
    const response = await fetch("https://jambos-worker.jopogb.workers.dev/api/list", {
        headers: {
            "Authorization": env.WorkersAPIKey
        }
    })
    const data = response.json()
    return data
}

export async function load () {
    let news = await getNews()
    return {
        articles: news
    }
}