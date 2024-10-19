import { marked } from "marked"
import fs from "fs"

export function load ({ params }) {
    return { 
        title: params.slug,
        content: marked.parse(fs.readFileSync("content/news/"+params.slug+".md", "utf-8"))
     }
}