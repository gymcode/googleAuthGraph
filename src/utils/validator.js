var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; 

const RegistrationValidation = (
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

const LoginValidation = (email, password)=>{
    const errors = {}
        
        if (email.trim() === "") {
            errors.email = "email field must not be empty"
        } else {
            if (!email.match(emailRegex)) {
                errors.email = "email must be in the correct format"
            }
        }
        if (password.trim() === "") {
            errors.password = "password field must not be left empty"
        }

        return {
            errors, 
            valid: Object.keys(errors).length < 1
        }
}

const MainAdminValidation = (
    firstname, 
    othernames, 
    email, 
    password,
    confirmPassword
)=>{
    const errors = {};

    if (firstname.trim() === '') {
        errors.firstname = "firstname must not be empty"
    }
    if (othernames.trim() === '') {
        errors.othernames = "othernames must not be empty"
    }
    if (email.trim() === '') {
        errors.email = "username must not be empty"
    } else if (!email.match(emailRegex)){
        errors.email = "the format must be in the form of an email"
    }
    if (password.trim() === '') {
        errors.password = "password field must not be empty"
    } else if (!password.match(passwordRegex)) {
        errors.password = "password field must contain at least an uppercase, a symbol and alphnumerica values"
    } else if (password !== confirmPassword){
        errors.password = "passwords must match"
    }

    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }

}


module.exports = {
   LoginValidation, 
   RegistrationValidation, 
   MainAdminValidation
}