import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(302, '/news/1738877114073');
}
