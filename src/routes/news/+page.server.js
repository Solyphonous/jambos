async function getNews() {
    const WorkersAPIKey = process.env.WorkersAPIKey
    const response = await fetch("https://jambos-worker.jopogb.workers.dev/api/list", {
        headers: {
            "Authorization": WorkersAPIKey
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