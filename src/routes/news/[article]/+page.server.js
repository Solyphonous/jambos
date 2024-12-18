// Article server

import { env } from "$env/dynamic/private";

export async function load ({ params }) {

    const title = params.article
    const encodedTitle = title.replace(/ /g, "-")

    var content = `<h1>No article content</h1>`
    var author = `Nobody`

    const response = await fetch(`${env.WorkerURL}/article/${encodedTitle}`, {
        headers: {
            "Authorization": env.WorkersAPIKey
        }
    })
    const data = await response.json()
    if (response.ok) {
        content = data.content
        author = data.author
    } else {
        content = `<h1>Error loading article: ${data.error}</h1>`
    }

    return { 
        title: title,
        author: author,
        content: content
    }
}