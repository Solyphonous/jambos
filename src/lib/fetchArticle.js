import { env } from "$env/dynamic/private";

export async function fetchArticle(articlename) {
    const encodedTitle = articlename.replace(/ /g, "-")

    var content = `<h1>No article content</h1>`
    var author = `Nobody`

    const response = await fetch(`${env.WorkerURL}/article/${encodedTitle}`, {
        headers: {
            "Authorization": env.WorkersAPIKey
        }
    })

    const data = await response.json()
    if (!response.ok) {
        content = `<h1>Error loading article: ${data.error}</h1>`
    }

    return { 
        title: data.title,
        author: data.author,
        content: data.content,
        thumbnail: data.thumbnail
    }
}

    