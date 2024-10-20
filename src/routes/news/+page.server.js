async function getNews() {
    const response = await fetch("https://jambos.casa/api/list")
    const data = response.json()
    return data
}

export async function load () {
    let news = await getNews()
    return {
        articles: news
    }
}