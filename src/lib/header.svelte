<script>
    import { browser } from "$app/environment"
    import { afterNavigate } from "$app/navigation"

    export let token

    let currentpath = browser ? window.location.pathname : "/"

    if (browser) {
        afterNavigate(() => {
            currentpath = window.location.pathname;
        });
    }

    const links = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Music", path: "/musica"},
        {name: "News", path: "/news"},
        {name: "The Jamborium", path: "/jamborium"},
        {name: "EVIL PAGE", path: "/linganguli"},
        {name: "Admin", path: "/admin"}
    ]

    if (token) {
        links.push({name: "Logout", path: "Logout"})
    }
    

    
</script>

<div class="header">
    <nav>
        <a href="/"><img src="/images/jambologo.png" alt="The jambos logo"></a>
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
    nav {
        position: sticky;
        height: 70px;
        top: 0;

        display: flex;
        align-items: center;
        padding: 0 20px;
        margin-bottom: 100px;

        background-color: rgb(10, 10, 10);
    }
    
    img {
        height: 200%;
        max-width: 100%;
        transform: rotate(-15deg);

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
        font-size: 2rem;
        height: 100%;
    }
    span {
        font-weight: bold;
    }
</style>