console.log("Hola mundo")
const form = document.querySelector("#form-login")

// capturamos los imputs, usamos el nombre de la variable declarada para ser mas especificos
const inputEmail = form.querySelector('#email')
const inputPassword = form.querySelector('#password')

// capturamos los mensajes de errors
const errorEmail = form.querySelector('.msg-error-email')
const errorPassword = form.querySelector('.msg-error-password')

console.log(errorEmail)

form.addEventListener('submit', (e) =>{

    let hasErrors = false

    //mail
    if (inputEmail.value.length < 3) {
        hasErrors = true
        errorEmail.innerHTML = "Escriba su mail"
        inputEmail.focus()
    }

    //password
    if (inputPassword.value.length < 3) {
        hasErrors = true
        errorEmail.innerHTML = "Escriba su password"
        inputEmail.focus()
    }

    //bloqueamos la ejecucion por Default
    if (hasErrors) {
    e.preventDefault()
    }

})

