function print_document(){
    window.print()
}



const formulario = document.querySelector('#formulario')
const contenedor = document.querySelector('#contenedor')
const informe = document.querySelector('.informe')
let contenedorDatos = []

console.log(contenedor);

formulario.addEventListener('submit', registrar)


function registrar(e){
    e.preventDefault()


    const inputNombre1 = document.querySelector('.nombre1').value
    const inputNombre2 = document.querySelector('.nombre2').value
    const selectModalidad = document.querySelector('.modalidad').value


    const objetoRegistro = {
        fecha: new Date(),
        nombre1: inputNombre1,
        nombre2: inputNombre2,
        modalidad: selectModalidad
    }

    contenedorDatos = [...contenedorDatos, objetoRegistro]

    console.log(contenedorDatos);

    imprimirHtml()
    mostrarReporte()
}


function imprimirHtml(){

    contenedorDatos.forEach(nombre => {

        const nombrePastores = document.createElement('p')
        nombrePastores.textContent = nombre.nombre1
        const nombreVoluntarios = document.createElement('p')
        nombreVoluntarios.textContent = nombre.nombre2


        contenedor.appendChild(nombrePastores)
        contenedor.appendChild(nombreVoluntarios)
    })
}

function mostrarReporte(){

    if (contenedor.length > 1) {
        informe.classList.remove('oculto')
    }else{
        informe.classList.add('oculto')
    }
}

mostrarReporte()





