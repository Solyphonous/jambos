// Article server

import { fetchArticle } from "../../../lib/fetchArticle.js";
import { env } from '$env/dynamic/private';

export async function load({ params }) {
	var article = fetchArticle(params.article)
	return article
}

export const actions = {
	default: async ({ request, cookies, url, locals, event }) => {
		const formData = await request.formData();
		const cookie = cookies.get('token');

		if (!cookie) {
			return {
				toast: "Not logged in!!! STOP HACKING !!!!! "
			}
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
				token: cookie
			})
		});
		
		if (response.ok) {
			return {
				toast: 'Successfully commented!'
			};
		} else {
			const data = await response.json()
			return {
				toast: `Failed to comment! Error: ${data.error}`
			};
		}
	}
};
