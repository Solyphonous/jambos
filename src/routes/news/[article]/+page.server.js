// Article server

import { fetchArticle } from "../../../lib/fetchArticle.js";

export async function load ({ params }) {
    var article = fetchArticle(params.article)
    return article
}