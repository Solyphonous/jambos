export async function load ({ params }) {
    const WorkersAPIKey = process.env.WorkersAPIKey

    const title = params.article
    const encodedTitle = title.replace(/ /g, "-")

    var content = `<h1>No article content</h1>`
    var author = `Nobody`

    const response = await fetch(`https://jambos-worker.jopogb.workers.dev/api/article/${encodedTitle}`, {
        headers: {
            "Authorization": WorkersAPIKey
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