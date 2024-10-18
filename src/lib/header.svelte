<script>
    import { browser } from "$app/environment"
    import { afterNavigate } from "$app/navigation"

    let currentpath = browser ? window.location.pathname : "/"

    if (browser) {
        afterNavigate(() => {
            currentpath = window.location.pathname;
        });
    }

    const links = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"}
    ]
</script>

<div class="header">
    <nav>
        <a href="/"><img src="images/jambologo.png" alt="The jambos logo"></a>
        <ul>
            {#each links as link}
                <li>
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
    :global(body) {
        margin: 0;
        padding: 0;
    }

    nav {
        position: sticky;
        height: 70px;
        top: 0;

        display: flex;
        align-items: center;
        padding: 0 20px;
        margin: 0;

        background-color: rgb(27, 27, 27);
    }
    
    img {
        height: 100%;
    }

    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        margin-left: auto;
    }

    li {
        margin: 0 15px
    }

    a, span {
        font-family: "Noto Sans Mono", "Consolas", "SF Mono", monospace;
        color: white;
        text-decoration: none;
        font-size: 30px;
        height: 100%;
    }
    span {
        font-weight: bold;
    }
</style>