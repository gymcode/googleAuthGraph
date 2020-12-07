module.exports = {
    RegistrationValidation: (
        firstname, 
        lastname, 
        username, 
        password, 
        confirmPassword
    )=>{
        const errors = {}; 

        if (firstname.trim() = '') {
            errors.firstname = "firstname must not be empty"
        }
        if (lastname.trim() = '') {
            errors.lastname = "lastname must not be empty"
        }
        if (username.trim() = '') {
            errors.username = "username must not be empty"
        }
        if (password.trim() = '') {
            errors.password = "password field must not be empty"
        } else {
            const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
            if (!password.match(passwordRegex)) {
                errors.password = "password field must contain at least an uppercase, a symbol and alphnumerica values"
            } else if (password !== confirmPassword) {
                errors.password = "passwords must match"
            }
        }

        return {
            errors, 
            valid: Object.keys(errors).length < 1
        }
    }
}