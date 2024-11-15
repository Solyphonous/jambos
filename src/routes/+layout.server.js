export async function load({ cookies }) {
    const token = cookies.get("login")
    
    if (token) {
        return token
    } else {
        console.log("No token")
    }
}