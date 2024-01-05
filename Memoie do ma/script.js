//navbar non coperta
var currentURL = window.location.href;

// Controllare se l'URL contiene "home.html"
if (currentURL.includes("home.html") || currentURL.includes("index.php")) {
    // Se siamo nella pagina home.html, lascia position: fixed;
}
else {
    // Altrimenti, cambia a position: static;
    var fixedElement = document.getElementById("header-content");
    fixedElement.style.position = "static";
}

//Funzione slideshow pagina Home
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
    slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); // Cambia immagine ogni 2000 millisecondi (2 secondi)
}

// Avvia la funzione allo script
showSlides();

