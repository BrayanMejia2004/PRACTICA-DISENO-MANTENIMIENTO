document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.getElementById("carousel-container");
    const btnLeft = document.getElementById("btn-left");
    const btnRight = document.getElementById("btn-right");
    const cards = document.querySelectorAll(".card-clients");
    const cardWidth = cards[0].offsetWidth;
    let currentPosition = 0;

    // Función para desplazar el carousel hacia la izquierda
    btnLeft.addEventListener("click", function() {
        if (currentPosition > 0) {
            currentPosition -= cardWidth;
            carouselContainer.style.transform = `translateX(-${currentPosition}px)`;
        }
    });

    // Función para desplazar el carousel hacia la derecha
    btnRight.addEventListener("click", function() {
        if (currentPosition < (cards.length - 1) * cardWidth) {
            currentPosition += cardWidth;
            carouselContainer.style.transform = `translateX(-${currentPosition}px)`;
        }
    });
});
