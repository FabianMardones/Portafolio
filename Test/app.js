function print_document(){
    window.print()
}



const formulario = document.querySelector('#formulario')
const contenedorLideres = document.querySelector('#lideres')
const contenedorPastores = document.querySelector('#pastores')
const contenedor = document.querySelector('#contenedor-datos')
const fechaEncuentro = document.querySelector('#fecha')


let contenedorNombres = []


formulario.addEventListener('submit', registrar)


function registrar(e){
    e.preventDefault()

    const inputNombre1 = document.querySelector('#nombre1').value
    const inputNombre2 = document.querySelector('#nombre2').value


    const objetoRegistro = {
        nombre1: inputNombre1,
        nombre2: inputNombre2,
        fecha: fechaEncuentro
    }

    contenedorNombres = [...contenedorNombres, objetoRegistro]

    imprimirHtml()

}

function imprimirHtml(){
    contenedorNombres.forEach(nombre => {

        const nombrePastores = document.createElement('strong')
        const nombreVoluntario = document.createElement('strong')
        const fechaEncuentroHoy = document.createElement('strong')

        nombrePastores.textContent = nombre.nombre1
        nombreVoluntario.textContent = nombre.nombre2
        fechaEncuentroHoy.textContent = nombre.fechaEncuentro = new Date()

        fechaEncuentro.appendChild(fechaEncuentroHoy)
        contenedorPastores.appendChild(nombrePastores)
        contenedorLideres.appendChild(nombreVoluntario)
    })
}




