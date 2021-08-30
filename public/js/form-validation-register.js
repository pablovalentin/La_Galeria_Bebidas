
window.onload = function() {

    const form = document.querySelector("#register-form")

    //Defino los inputs
    const inputName = form.querySelector('#name')
    const inputLastName= form.querySelector('#lastName')
    const inputEmail = form.querySelector('#email')
    const inputPassword = form.querySelector('#password')
    const inputConfirmPassword = form.querySelector('#passwordConfirmation')
    const inputProfileImage = form.querySelector('#profileImage')

    //Defino los errores
    const errorName = form.querySelector('.msg-error-name')
    const errorLastName= form.querySelector('.msg-error-lastName')
    const errorEmail = form.querySelector('.msg-error-email')
    const errorPassword = form.querySelector('.msg-error-password')
    const errorConfirmPassword = form.querySelector('.msg-error-passwordConfirmation')
    const errorProfileImage = form.querySelector('.msg-error-profileImage')
    const msgErrorsArray = [errorName, errorLastName, errorEmail, errorPassword, errorConfirmPassword, errorProfileImage]

    //Constantes para datos minimos
    const minChar = 2
    const minPassLength = 8

    function validateEmail(inputEmail) {  //validación de email
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(inputEmail).toLowerCase());    
    }    

    function validateForm(e) {
        console.log ("Validar formulario front")
        let hasErrors = false;
        resetErrors()

        const email = inputEmail.value

        //Validaciones nombre y apellido
        if (inputName.value.length < minChar){ 
            hasErrors = true
            errorName.innerHTML = "Por favor ingrese su nombre"
            inputName.focus()
        }
        if (inputLastName.value.length < minChar){ 
            errorLastName.innerHTML = "Por favor ingrese su apellido"
            if (!hasErrors){
                inputLastName.focus()
            }
            hasErrors = true
        }

        //Validaciones Email
        if (!inputEmail.value) {
            errorEmail.innerHTML = "Por favor ingrese su e-mail"
            if (!hasErrors){
                inputEmail.focus()
            }
            hasErrors = true
        }else if (!validateEmail(email)) {
            errorEmail.innerHTML = "Por favor ingrese un e-mail correcto"
            if (!hasErrors){
                inputEmail.focus()
            }
            hasErrors = true
        }

        //Validaciones contraseña
        //Defino variables para controlar espacios en la contraseña
        let spaces = false;
        let cont = 0;
        let regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        while (!spaces && (cont < inputPassword.length)) {
            if (inputPassword.charAt(cont) == " ")
            spaces = true;
            cont++;
        }             
        if (spaces) {
            errorPassword.innerHTML = "La contraseña no puede contener espacios en blanco"
            if (!hasErrors){
                inputPassword.focus()
            }
            hasErrors = true
        }else if (inputPassword.value.length < minPassLength){
            errorPassword.innerHTML = "La contraseña debe contener al menos 8 digitos"
            if (!hasErrors){
                inputPassword.focus()
            }
            hasErrors = true
        }/* else if (!regularExpression.test(inputPassword)) {
            hasErrors = true
            errorPassword.innerHTML = "La contraseña deberá tener letras mayúsculas, minúsculas, un número y un carácter especial"            
            inputPassword.focus()
        } */
        if (inputPassword.value != inputConfirmPassword.value){
            errorConfirmPassword.innerHTML = "Las contraseñas no coinciden"            
            if (!hasErrors){
                inputConfirmPassword.focus()
            }
            hasErrors = true
        }

        //Validaciones foto de perfil
        if (!inputProfileImage.value) {
            hasErrors = true
            errorProfileImage.innerHTML = "Ingrese una foto de perfil"
        } else {
            const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
                if (!allowedExtensions.exec(inputProfileImage.value)) {
                    hasErrors = true
                    errorProfileImage.innerHTML = "Ingrese un archivo válido"
                } 
        }

        if (hasErrors) {
            e.preventDefault()
        }


}

console.log(msgErrorsArray)

function resetErrors() {
    msgErrorsArray.forEach(msg => {
        msg.innerHTML = ""
    })
} 

form.addEventListener('submit', validateForm)

}