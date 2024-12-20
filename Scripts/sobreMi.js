let currentIndex = 0;

function openSection(index) {
    const sections = document.querySelectorAll('.content');
    const buttons = document.querySelectorAll('.button');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    sections[index].classList.add('active');
    buttons.forEach(button => {
        button.classList.remove('square');
        button.classList.add('diamond');
    });
    buttons[index].classList.remove('diamond');
    buttons[index].classList.add('square');
    currentIndex = index;
}

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav__menu');

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', function () {
            navMenu.classList.toggle('open');
        });
    } else {
        console.error("No se encontró el botón de toggle o el menú de navegación.");
    }

    handleResponsiveSections();
});

function toggleDescription(button) {
    const card = button.closest('.skill__card');
    const description = button.previousElementSibling;
    const allCards = document.querySelectorAll('.skill__card');
    allCards.forEach((otherCard) => {
        const otherDescription = otherCard.querySelector('.skill__description');
        const otherButton = otherCard.querySelector('.skill__button');
        if (otherCard !== card) {
            otherDescription.style.display = "none"; 
            otherButton.textContent = "Ver información";
        }
    });
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block"; 
        button.textContent = "Ocultar información";
    } else {
        description.style.display = "none"; 
        button.textContent = "Ver información"; 
    }
}

function handleResponsiveSections() {
    const sections = document.querySelectorAll('.content');
    if (window.innerWidth <= 768) {
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'block';
        });
    } else {
        sections.forEach((section, index) => {
            section.style.display = ''; 
            if (index === currentIndex) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
}

window.addEventListener('wheel', (event) => {
    if (window.innerWidth > 768) { 
        event.preventDefault(); 
        if (event.deltaY > 0) {
            if (currentIndex < document.querySelectorAll('.content').length - 1) {
                openSection(currentIndex + 1);
            }
        } else {
            if (currentIndex > 0) {
                openSection(currentIndex - 1);
            }
        }
    }
}, { passive: false });

window.addEventListener('resize', handleResponsiveSections);
