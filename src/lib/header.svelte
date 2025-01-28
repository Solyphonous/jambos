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

    $: links = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Music", path: "/musica"},
        {name: "News", path: "/news"},
        //{name: "The Jamborium", path: "/jamborium"}, Removed until it's added
        {name: "MEMORIAL", path: "/memorial"},
        ...(token?.rank > 250 ? [{name: "Admin", path: "/admin"}] : []),
        ...(token ? [{name: "Logout", path: "/logout"}] : [{name: "Login", path: "/login"}])
    ]

</script>

<div class="header">
    <nav>
        <a href="/" class="logo-link"><img src="/images/jambologo.png" alt="The jambos logo"></a>
        <ul>
            {#each links as link}
                <li style={link.name == "MEMORIAL" ? "font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;" : ""}>
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

    .logo-link {
        display: flex;
        align-items: center;
        height: 100%;
    }
    .header {
        position: sticky;
        top: 0
    }
    nav {
        height: 4rem;
        top: 0;
        display: flex;
        align-items: center;
        padding: 0 2rem;
        gap: 1rem;
        margin-bottom: 100px;

        background-color: rgb(10, 10, 10);
    }
    
    img {
        padding-top: 80px;
        flex-shrink: 0;
        height: auto;
        max-width: 140px;
        width: 140px;
        transform: rotate(-15deg);
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
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