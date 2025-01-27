import { env } from "$env/dynamic/private";
import { fetchArticle } from "../../lib/fetchArticle";

async function getNews() {
    const response = await fetch(`${env.WorkerURL}/list`, {
        headers: {
            "Authorization": env.WorkersAPIKey
        }
    })
    const data = await response.json()
    if (response.ok) {
        return data
    } else {
        return [
            {"name": `Error ${response.status} fetching articles: ${data.error}`}
        ]
    }
}

export async function load () {
    let news = await getNews()

    var articles = []
    for (var i = 0; i < news.length; i++) {
        articles.push(await fetchArticle(news[i].name))
    }

    return {
        articles: articles
    }
}