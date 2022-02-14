let navbar= document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
    search.classList.remove('active')
}

let search= document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active')
    navbar.classList.remove('active')
}


let cart= document.querySelector('.cart-items-conteiner')

document.querySelector('#cart-btn').onclick = () => {
    navbar.classList.remove('active')
    search.classList.remove('active')

    cart.classList.toggle('active')
    Swal.fire({
    title:'Añade algo al carrito',
    icon:'error',
    width: 300,
    }
    )
}

window.onscroll = () => {
    navbar.classList.remove('active')
    search.classList.remove('active')
}


