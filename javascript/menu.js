let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

// ABRE O MENU
btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

// FECHA O MENU
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

// FECHA O MENU
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


// EFEITO DE ROLAGEM DO MENU

window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('menu-rolagem',window.scrollY > 0)
})