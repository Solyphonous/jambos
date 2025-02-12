// Article server

import { fetchArticle } from '../../../lib/fetchArticle.js';
import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';

async function fetchComments(articleId) {
	const response = await fetch(`${env.WorkerURL}/get_comments`, {
		method: 'POST',
		headers: {
			Authorization: env.WorkersAPIKey,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			article: articleId
		})
	});

	if (response.ok) {
		const data = await response.json();
		return data;
	}
}

export async function load({ params }) {
	var article = await fetchArticle(params.article);
	var comments = await fetchComments(params.article);

	if (article.error) {
		redirect(302, '/news');
	}

	return {
		article: article,
		comments: comments
	};
}

export const actions = {
	default: async ({ request, cookies, url, locals, event, params }) => {
		const formData = await request.formData();
		const cookie = cookies.get('token');

		if (!cookie) {
			return {
				toast: 'Not logged in!!! STOP HACKING !!!!! '
			};
		}

		var formObject = {};

		for (const pair of formData.entries()) {
			formObject[pair[0]] = pair[1];
		}

		const response = await fetch(`${env.WorkerURL}/comment`, {
			method: 'POST',
			headers: {
				Authorization: env.WorkersAPIKey,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				comment: formObject.comment,
				article: params.article,
				token: cookie
			})
		});

		if (response.ok) {
			return {
				toast: 'Successfully commented!'
			};
		} else {
			const data = await response.json();
			return {
				toast: `Failed to comment! Error: ${JSON.stringify(data.error)}`
			};
		}
	}
};
