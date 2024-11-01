document.addEventListener("DOMContentLoaded", () => {
    fetch('/Scripts/proyectos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('La respuesta no fue correcta');
            }
            return response.json();
        })
        .then(data => {
            const productosContainer = document.getElementById('productos');
            data.forEach(producto => {
                const card = document.createElement('div');
                card.classList.add('card');

                card.innerHTML = `
                        <div class="image-box">
                            <img src="${producto.imagen}" alt="${producto.nombre}">
                        </div>
                        <div class="content">
                            <h2 class="data-producto">${producto.nombre}</h2>
                            <p>${producto.descripcion}</p>
                            <div class="icons">
                                <a href="${producto.github}" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="${producto.pagina}" target="_blank">
                                    <i class="fas fa-globe"></i>
                                </a>
                            </div>
                        </div>
                    `;
                productosContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la operacion de busqueda:', error);
        });
});

