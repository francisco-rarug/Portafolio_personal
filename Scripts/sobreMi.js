document.addEventListener("DOMContentLoaded", function () {
    window.toggleDescription = function (button) {
        const card = button.closest('.skill__card');
        const description = card.querySelector('.skill__description');
        const allCards = document.querySelectorAll('.skill__card');

        allCards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.querySelector('.skill__description').style.display = 'none';
                otherCard.querySelector('.skill__button').textContent = 'Ver información';
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

    const allSections = document.querySelectorAll('.content');

    allSections.forEach((section) => {
        section.classList.add('hidden');
    });

    const initialSection = allSections[0];
    initialSection.classList.remove('hidden');
    initialSection.classList.add('visible');

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

});
