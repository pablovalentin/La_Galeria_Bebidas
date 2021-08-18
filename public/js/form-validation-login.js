/* console.log("Hola mundo")
window.onload = function(){
const form = document.querySelector("#form-login")

// capturamos los imputs, usamos el nombre de la variable declarada para ser mas especificos
const inputEmail = form.querySelector('#email')
const inputPassword = form.querySelector('#password')

// capturamos los mensajes de errors
const errorEmail = form.querySelector('.msg-error-email')
const errorPassword = form.querySelector('.msg-error-password')
const msgErrorsArray = [errorEmail, errorPassword]

function validateEmail(inputEmail) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(inputEmail).toLowerCase());    
}    

function validateForm(e) {
    console.log("entro al validate")
    let hasErrors = false
    resetErrors() 

    const email = inputEmail.value

    //mail
    if (!validateEmail(email)) {
        hasErrors = true
        errorEmail.innerHTML = "Por favor ingresá un e-mail correcto"
        inputEmail.focus()
    }

    //password
    if (inputPassword.value.length < 3) {
        hasErrors = true
        errorPassword.innerHTML = "Escriba un password correcto"
        inputPassword.focus()
    }


    if (hasErrors) {
        e.preventDefault()
        console.log("llego al Default")
    }
        
}

function resetErrors() {
    msgErrorsArray.forEach(msg => {
        msg.innerHTML = ""
    })
}

form.addEventListener('submit', validateForm)
}
 */