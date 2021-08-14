
window.onload = function(){
    const form = document.querySelector("#product-form")
   
    // los inputs
    const inputName = form.querySelector('#name')
    const inputDescription = form.querySelector('#description')
    const inputPrice = form.querySelector('#price')
    const inputQuantity = form.querySelector('#quantity')
    const inputImage = form.querySelector('#image')

    //errores
    const errorName = form.querySelector('.msg-error-name')
    const errorDescription = form.querySelector('.msg-error-description')
    const errorPrice = form.querySelector('.msg-error-price')
    const errorQuantity = form.querySelector('.msg-error-quantity')
    const errorImage = form.querySelector('.msg-error-image')
    const msgErrorsArray = [errorName, errorDescription, errorImage, errorPrice, errorQuantity]


    function validateForm(e) {
        let hasErrors = false
        resetErrors() 

        if (inputName.value.length < 5){ 
            hasErrors = true
            errorName.innerHTML = "Escriba el nombre del producto"
            inputName.focus()
        }
        if (inputDescription.value.length < 20){
            
            errorDescription.innerHTML = "Escriba una descripción para el producto"
            if (!hasErrors){
                inputDescription.focus()
            }
            hasErrors = true
        }
        if (!inputPrice.value){
            
            errorPrice.innerHTML = "Ingrese el precio del producto"
            if (!hasErrors){
                inputPrice.focus()
            }
            hasErrors = true

        } else if (isNaN(inputPrice.value)){
            
            errorPrice.innerHTML = "Ingrese un valor numérico"
            inputPrice.focus()
            hasErrors = true
        }
        if (!inputQuantity.value){
            errorQuantity.innerHTML = "Ingrese la disponibilidad del producto"
            if (!hasErrors){
                inputQuantity.focus()
            }
            hasErrors = true
        } else if (isNaN(inputQuantity.value)){
            errorQuantity.innerHTML = "Ingrese un valor numérico"
            if (!hasErrors){
                inputQuantity.focus()
            }
            hasErrors = true
        }
        if (!inputImage.value) {
            hasErrors = true
            errorImage.innerHTML = "Ingrese una imágen para el producto"
        } else {
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

/* inputName.addEventListener('blur', e =>{
    errorName.innerHTML = "Escriba el nombre del producto"
    console.log(inputName.value.length)
})
 */

}
