<script>
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';

	export let token;

	let currentpath = browser ? window.location.pathname : '/';

	if (browser) {
		afterNavigate(() => {
			currentpath = window.location.pathname;
		});
	}

	$: links = [
		{ name: 'About', path: '/about' },
		{ name: 'Music', path: '/musica' },
		{ name: 'News', path: '/news' },
		//{name: "The Jamborium", path: "/jamborium"}, Removed until it's added
		{ name: 'MEMORIAL', path: '/memorial' },
		...(token?.rank > 250 ? [{ name: 'Admin', path: '/admin' }] : []),
		...(token ? [{ name: 'Logout', path: '/logout' }] : [{ name: 'Login', path: '/login' }])
	];
</script>

<div class="header">
	<nav>
		<div class="logo-container">
			<a href="/">
				<img class="logo wide" src="/images/jambologo.png" alt="The jambos logo" />
			</a>
		</div>
		<ul>
			{#each links as link}
				<li
					style={link.name == 'MEMORIAL'
						? "font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;"
						: ''}
				>
					{#if link.path === currentpath}
						<span>{link.name}</span>
					{:else}
						<a href={link.path}>{link.name}</a>
					{/if}
				</li>
			{/each}
		</ul>
	</nav>
</div>

<style>
	.header {
		position: sticky;
		top: 0;
	}

	.logo-container {
		height: 6em;
		padding-top: 2em;
	}

	.logo {
		height: 200%;
		transform: rotate(-15deg);
		object-fit: contain;
		transition: transform 0.3s;
	}

	.logo:hover {
		transform: rotate(340deg) scale(1.2);
	}

	.logo:active {
		transform: scale(0.9);
	}

	nav {
		height: 3em;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 0.5rem 2rem;
		margin-bottom: 8em;
		background-color: rgb(10, 10, 10);
	}

	@media screen and (max-width: 900px) {
		ul {
			flex-direction: column;
		}

		nav {
			flex-direction: column;
			height: auto;
		}

		.header {
			position: static;
		}

		.logo {
			height: 100%;
		}
	}

	ul {
		display: flex;
		gap: 1.5rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	a,
	span {
		font-size: 1.5em;
	}

	span {
		font-style: italic;
		font-weight: bold;
	}
</style>
