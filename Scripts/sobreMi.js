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
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        if (currentIndex < document.querySelectorAll('.content').length - 1) {
            openSection(currentIndex + 1);
        }
    } else {
        if (currentIndex > 0) {
            openSection(currentIndex - 1);
        }
    }
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

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    
    let timeout;

    function hideHeader() {
        header.classList.add('hidden');
    }

    function showHeader() {
        header.classList.remove('hidden');
    }

    document.addEventListener('click', function() {
        showHeader();
        
        clearTimeout(timeout);

        timeout = setTimeout(hideHeader, 3000); 
    });

    timeout = setTimeout(hideHeader, 3000);
});


