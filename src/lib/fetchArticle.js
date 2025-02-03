import { env } from '$env/dynamic/private';

export async function fetchArticle(articlename) {
	const encodedTitle = articlename.replace(/ /g, '-');

	const response = await fetch(`${env.WorkerURL}/article/${encodedTitle}`, {
		headers: {
			Authorization: env.WorkersAPIKey
		}
	});

	const data = await response.json();

	return {
		title: data.title,
		author: data.author,
		content: data.content,
		thumbnail: data.thumbnail,
		name: data.name
	};
}
