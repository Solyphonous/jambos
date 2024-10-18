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

const url = window.location.host
const subdomain = getSubdomain(url)

switch(subdomain) {
    case "p":
        console.log(url, subdomain)
        //loadPage("https://rentry.co/phy")
    case "soly":1
        console.log(url, subdomain)
        //loadPage("https://solyphonous.carrd.co/")
    case "seb":
        console.log(url, subdomain)
        //loadPage("https://sebistan.carrd.co/")
}