const form = document.querySelector("#product-form")


// los inputs
const inputName = form.querySelector('#name')
const inputDescription = form.querySelector('#description')
const inputPrice = form.querySelector('#price')
const inputQuantity = form.querySelector('#quantity')
const inputImage = form.querySelector('#image')
const existingImage = form.querySelector('#existing-image')

//errores
const errorName = form.querySelector('.msg-error-name')
const errorDescription = form.querySelector('.msg-error-description')
const errorPrice = form.querySelector('.msg-error-price')
const errorQuantity = form.querySelector('.msg-error-quantity')
const errorImage = form.querySelector('.msg-error-image')

const msgErrorsArray = [errorName, errorDescription, errorImage]

function validateForm(e) {
    let hasErrors = false
    resetErrors() 
    
    
    if (inputName.value.length < 5){
        
        hasErrors = true
        errorName.innerHTML = "Escriba un nombre del producto"
        inputName.focus()
    }
    if (inputDescription.value.length < 20){
        hasErrors = true
        errorDescription.innerHTML = "Escriba una descripción para el producto"
        inputName.focus()
    }
    if (!inputImage.value && !existingImage.src) {
        errorImage.innerHTML = "Ingrese una imágen para el producto"
    } else {
        console.log(inputImage.value)
        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
            if (!allowedExtensions.exec(inputImage.value)) {
                hasErrors = true
                errorImage.innerHTML = "Ingrese un archivo válido"
            } 
    }

    if (hasErrors) {
        e.preventDefault()
    }

}

function resetErrors() {
    msgErrorsArray.forEach(msg => {
        msg.innerHTML = ""
    })
} 

form.addEventListener('submit', validateForm)