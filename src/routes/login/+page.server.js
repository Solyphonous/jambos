import bcrypt from "bcrypt"

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
        const username = formData.get("username")
        const password = formData.get("password")
        console.log(username, password)

        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                console.log(hash)
            })
        })
        
	}
};