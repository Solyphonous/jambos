async function getNews() {
    const response = await fetch("https://jambos-worker.jopogb.workers.dev/api/list")
    const data = response.json()
    return data
}

export async function load () {
    let news = await getNews()
    return {
        articles: news
    }
}