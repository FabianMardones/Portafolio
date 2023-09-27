
//Selectores
const year = document.querySelector('.current-year strong')
const switchMode = document.querySelector('.switch')
const dark = document.querySelector('.dark')
const index = document.querySelector('body')
const sobreMi = document.querySelector('.sobre-mi')
const luna = document.querySelector('.luna')
const sol = document.querySelector('.sol')
const contentidoPage = document.querySelector('.content__page')
const menuList = document.querySelector('.menu__list')
const layoutContent = document.querySelector('.layout__content')
const userInfo = document.querySelector('.aside__user-info')
const layoutMenu= document.querySelector('.layout__menu')





//Eventos
function agruparEventListener() {
    document.addEventListener('DOMContentLoaded', (() =>{
        cargarModoOscuro()
        actualizarYear()
    }));
    switchMode.addEventListener('click', cambiarModo);
}
agruparEventListener();



//Funciones
function actualizarYear(){
    const currentYear = document.createElement('span')
    currentYear.textContent = new Date().getFullYear()

    year.appendChild(currentYear)
}

function cargarModoOscuro() {
    const modoOscuroActivado = localStorage.getItem('modoOscuro') === 'true';

    if (modoOscuroActivado) {
        activarModoOscuro();
    }
}




function activarModoOscuro() {
    index.classList.add('dark');
    luna.classList.add('oculto');
    sol.classList.remove('oculto');
    contentidoPage.classList.add('dark');
    menuList.classList.add('dark');
    userInfo.classList.add('dark');
    switchMode.classList.add('dark');
    menuList.classList.add('dark');

    // Guardar el modo oscuro en LocalStorage
    localStorage.setItem('modoOscuro', 'true');
}


function desactivarModoOscuro() {
    index.classList.remove('dark');
    luna.classList.remove('oculto');
    sol.classList.add('oculto');
    contentidoPage.classList.remove('dark');
    menuList.classList.remove('dark');
    userInfo.classList.remove('dark');
    switchMode.classList.remove('dark');
    menuList.classList.remove('dark');

    // Guardar el modo oscuro en LocalStorage
    localStorage.setItem('modoOscuro', 'false');
}

function cambiarModo() {
    if (index.classList.contains('dark')) {
        desactivarModoOscuro();
    } else {
        activarModoOscuro();
    }
}





