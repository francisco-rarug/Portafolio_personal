document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');

    toggleButton.addEventListener('click', function () {
        menu.classList.toggle('open');
    });
});

// function toggleDescription(button) {
//     var card = button.parentNode;
//     var description = card.querySelector(".skill__description");
//     var allCards = document.querySelectorAll(".skill__card");

//     // Cerrar todas las tarjetas excepto la actual
//     allCards.forEach(function (currentCard) {
//         var currentDescription = currentCard.querySelector(".skill__description");
//         var currentButton = currentCard.querySelector(".skill__button");

//         if (currentCard !== card) {
//             currentCard.classList.remove("active");
//             currentDescription.style.display = "none";
//             currentButton.innerText = "Ver información";
//         }
//     });

//     
// }



var profile = document.querySelector('.profile__image');
var profilePopup = document.getElementById('profile-popup');
var closeBtn = document.querySelector('.profile-popup .close');

profile.addEventListener('click', function () {
    profilePopup.style.display = 'block';
});

closeBtn.addEventListener('click', function () {
    profilePopup.style.display = 'none';
});

// Agregar evento de clic en el documento para cerrar la vista ampliada al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', function (event) {
    // Verificar si se hizo clic fuera de la vista ampliada de la foto de perfil
    if (event.target !== profile && event.target !== profilePopup) {
        profilePopup.style.display = 'none';
    }
});

// Agregar interactividad a la navegación
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        const sectionId = link.getAttribute('href').slice(1);
        const section = document.getElementById(sectionId);

        section.scrollIntoView({ behavior: "smooth" });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');

    const isMobile = window.innerWidth <= 480;
    const triggerPoint = isMobile ? window.innerHeight / 2 : 1800;

    window.addEventListener('scroll', function() {
        if (window.scrollY > triggerPoint) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav__menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
