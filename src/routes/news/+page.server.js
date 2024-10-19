import fs from "fs"

export function load () {
    let files = fs.readdirSync("content/news")
    return {
        articles: files
    }
}