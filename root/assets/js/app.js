
//Selectores
const year = document.querySelector('#current-year strong')
const switchMode = document.querySelector('#switch')
const dark = document.querySelector('.dark')
const documento = document.querySelector('body')
const luna = document.querySelector('#luna')
const sol = document.querySelector('#sol')
const contentidoPage = documento.querySelector('#content__page')
const menuList = document.querySelector('#menu__list')
const layoutContent = document.querySelector('#layout__content')
const userInfo = document.querySelector('#aside___user-info')
const layoutMenu= document.querySelector('.layout__menu')




//Eventos
function agruparEventListener(){
    document.addEventListener('DOMContentLoaded', actualizarYear)

    switchMode.addEventListener('click', cambiarIcono)
}
agruparEventListener()



//Funciones
function actualizarYear(){
    const currentYear = document.createElement('span')
    currentYear.textContent = new Date().getFullYear()

    year.appendChild(currentYear)
}

function cambiarIcono(){
    if (switchMode) {
        documento.classList.toggle('dark')
        luna.classList.toggle('oculto')
        sol.classList.toggle('oculto')
        contentidoPage.classList.toggle('dark')
        menuList.classList.toggle('dark')
        userInfo.classList.toggle('dark')
        switchMode.classList.toggle('dark')
        menuList.classList.toggle('dark')
    }

}



