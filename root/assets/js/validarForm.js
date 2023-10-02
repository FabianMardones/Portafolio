//Selectores
const inputNombre = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const inputTelefono = document.querySelector('#phone')
const inputMensaje = document.querySelector('#comment')
const inputFormulario = document.querySelector('#contactform')
const formulario = document.querySelector('#contactform')
const btnSubmit = document.querySelector('#submitButton');
const btnReset = document.querySelector('#contactform button[type="reset"]')
const enviando = document.querySelector('.enviando')


const datosForm = {
    name: '',
    email: '',
    phone: '',
    comment: ''
}


//Eventos
function agruparEventListener(){
    inputNombre.addEventListener('blur', validacion)
    inputEmail.addEventListener('blur', validacion)
    inputTelefono.addEventListener('blur', validacion)
    inputMensaje.addEventListener('blur', validacion)
    inputFormulario.addEventListener('blur', validacion)
    formulario.addEventListener('submit', enviarFormulario)
    btnReset.addEventListener('click', ((e) =>{
        e.preventDefault()

        resetearFormulario()

    }))
}
agruparEventListener()


// Funciones
function validacion(e){

    const valorInput = e.target.value
    const idInput = e.target.id
    const referencia = e.target.parentElement
    const mensaje = `El ${idInput} es obligatorio`

    if (valorInput.trim() === "") {
        mostrarAlerta(mensaje,referencia)
        datosForm[idInput] = ''
        validarObjetoDatosForm()
        return
    }

    if (!validarEmail(valorInput) && idInput === 'email') {
        mostrarAlerta(`El email es inválido`, referencia)
        datosForm[idInput] = ''
        validarObjetoDatosForm()
        return
    }

    eliminarAlerta(referencia)

    datosForm[idInput] = valorInput.trim().toLowerCase()

    validarObjetoDatosForm()

}

function enviarFormulario(e) {
    e.preventDefault();

    enviando.classList.remove('oculto')

    setTimeout(() => {

        enviando.classList.add('oculto')

        formulario.setAttribute("action", "https://formsubmit.co/47217f0f528a66ac35aa590e960f4bea");
        formulario.setAttribute('method', 'POST');
        formulario.submit();

        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `Gracias ${datosForm.name}`,
            color: '#716add',
            text: 'Tu mensaje ha sido enviado con exito',
            showConfirmButton: false,
            timer: 4000
        })


        setTimeout(() => {
            resetearFormulario()
        }, 4000);

    }, 4000);



}

function resetearFormulario () {
    datosForm.name = ''
    datosForm.email = ''
    datosForm.phone = ''
    datosForm.comment = ''

    validarObjetoDatosForm()

    formulario.reset()
}

function mostrarAlerta(mensaje, referencia){

    eliminarAlerta(referencia)

    const mensajeError = document.createElement('p')
    mensajeError.textContent = mensaje
    mensajeError.classList.add('error')
    mensajeError.style.color = 'white'
    mensajeError.style.backgroundColor = 'red'
    mensajeError.style.display = 'block'
    mensajeError.style.marginLeft = '20px'
    mensajeError.style.textAlign = 'center'
    mensajeError.style.fontWeight = 'bold'
    mensajeError.style.borderRadius = '10px'
    mensajeError.style.width = '20rem'

    referencia.appendChild(mensajeError)
}

function eliminarAlerta(referencia){
    const error = referencia.querySelector('.error')

    if (error) {
        error.remove()
    }
}

function validarEmail(email){
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    const validacion = regex.test(email)

    return validacion
}

function validarObjetoDatosForm(){

    console.log(datosForm);

    const incluyeValorVacio = Object.values(datosForm).includes('')

   if (incluyeValorVacio) {
        btnSubmit.classList.remove('form__submit')
        btnSubmit.disabled = true
        return
   }
    btnSubmit.classList.add('form__submit')
    btnSubmit.disabled = false
}