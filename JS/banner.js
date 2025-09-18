if(document.querySelector(".banner__carousel")) {
let carouselIndex = 0
let bannerImage = document.querySelectorAll('.banner__imagen')
let prevImage = document.querySelector('.banner__boton--prev')
let nextImage = document.querySelector('.banner__boton--next')

function mostrarImagen(index) {
    bannerImage.forEach((banner, i) => {
        banner.classList.toggle('banner__imagen--active', i === index)
    });
}

prevImage.addEventListener('click', () => {
    carouselIndex = (carouselIndex - 1 + bannerImage.length) % bannerImage.length
    mostrarImagen(carouselIndex)
})

nextImage.addEventListener('click', () => {
    carouselIndex = (carouselIndex + 1) % bannerImage.length
    mostrarImagen(carouselIndex)
})


setInterval(() => {
    carouselIndex = (carouselIndex + 1) % bannerImage.length
    mostrarImagen(carouselIndex)
}, 2000);
}