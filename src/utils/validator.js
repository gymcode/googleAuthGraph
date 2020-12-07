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
    }
}``