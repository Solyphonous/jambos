// Root server

export async function load({ cookies }) {
    const token = cookies.get("login")
    
    if (token) {
        return token
    } else {
        console.log("Root server: No token could be loaded from cookies")
    }
}