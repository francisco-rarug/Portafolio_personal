const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    });

    if (response.ok) {
        form.reset();
        Swal.fire({
            title: '¡Mensaje enviado!',
            text: 'Tu mensaje ha sido enviado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Hubo un problema al enviar el mensaje. Inténtalo de nuevo.',
            icon: 'error',
            confirmButtonText: 'Aceptar'
        });
    }
});
