module.exports = {
    RegistrationValidation: (
        firstname, 
        lastname, 
        username, 
        password, 
        confirmPassword
    )=>{
        const errors = {}; 

        if (firstname.trim() === '') {
            errors.firstname = "firstname must not be empty"
        }
        if (lastname.trim() === '') {
            errors.lastname = "lastname must not be empty"
        }
        if (username.trim() === '') {
            errors.username = "username must not be empty"
        }
        if (password.trim() === '') {
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
    },

    LoginValidation: (email, password)=>{

        const errors = {}
        
        if (email.trim() === "") {
            errors.email = "email field must not be empty"
        } else {
            const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
            if (!email.match(emailRegex)) {
                errors.email = "email must be in the correct format"
            }
        }
        if (password.trim() === "") {
            errors.password = "password field must not be left empty"
        }

        return {
            errors, 
            valid: Object.keys(errors).length > 1
        }
    }
}