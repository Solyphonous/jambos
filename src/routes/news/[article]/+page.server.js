import { marked } from "marked"

export async function load ({ params }) {
    const title = params.article
    const encodedTitle = title.replace(/ /g, "-")

    var content = `<h1>No article content</h1>`
    var author = `Nobody`

    const response = await fetch(`https://jambos-worker.jopogb.workers.dev/api/article/${encodedTitle}`)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
        content = marked.parse(data.content)
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