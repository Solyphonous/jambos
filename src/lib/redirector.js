// Funcs

function getSubdomain(host) {
    const regex = /^([^\.]+)\./
    const match = host.match(regex)
    return match ? match[1] : null;
}

function loadPage(url) {
    window.location.replace(url)
}

// Main

export function checkForRedirects() {
    if (typeof(window) !== "undefined") {
        console.log("Trying for redir")
        const url = window.location.host
        const subdomain = getSubdomain(url)
        
        switch(subdomain) {
            case "p":
                loadPage("https://rentry.co/phy")
                break
            case "soly":
                loadPage("https://solyphonous.carrd.co/")
                break
            case "seb":
                loadPage("https://sebistan.carrd.co/")
                break
        }
    }
}