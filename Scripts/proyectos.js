document.addEventListener("DOMContentLoaded", () => {
    fetch('/Scripts/proyectos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta no fue correcta')
            }
            return response.json()
        })
        .then(data => {
            const proyectosContainer = document.getElementById('proyectos')
            data.forEach(proyecto => {
                const card = document.createElement('div')
                card.classList.add('card')

                card.innerHTML = `
                        <div class="image-box">
                            <img src="${proyecto.imagen}" alt="${proyecto.nombre}">
                        </div>
                        <div class="content">
                            <h2 class="data-proyecto">${proyecto.nombre}</h2>
                            <p>${proyecto.descripcion}</p>
                            <div class="icons">
                                <a href="${proyecto.github}" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="${proyecto.pagina}" target="_blank">
                                    <i class="fas fa-globe"></i>
                                </a>
                            </div>
                        </div>
                    `
                proyectosContainer.appendChild(card)
            })
        })
        .catch(error => {
            console.error('Hubo un problema con la operacion de busqueda:', error)
        })
})

