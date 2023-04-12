const btnForm = document.querySelector('.btnForm');

btnForm.addEventListener('click', (event) => {
  event.preventDefault();
  Toastify({
    text: 'Formulario Enviado',
    duration: 3000,
    gravity: 'bottom',
    close: true,
    style: {
        background: ' rgb(146, 145, 196)',
        color: 'black'
        
    }
  }).showToast();
});