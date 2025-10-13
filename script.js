document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if(!nombre || !email || !mensaje){
      status.textContent = 'Por favor complete los campos requeridos.';
      return;
    }
    status.textContent = 'Enviando...';
    setTimeout(()=>{
      status.textContent = 'Mensaje enviado correctamente. ¡Gracias!';
      form.reset();
    }, 800);
  });
});
