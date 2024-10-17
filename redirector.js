// Funcs

function getSubdomain(host) {
    const regex = /^([^\.]+)\./
    const match = host.match(regex)
    return match ? match[1] : null;
}

// Main

const url = window.location.host
const subdomain = getSubdomain(url)

if (subdomain == "p") {
    window.location.replace("https://rentry.co/phy")
}