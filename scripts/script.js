document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const steps = form.querySelectorAll('.step');
  const prevButtons = form.querySelectorAll('.prev-btn');
  const nextButtons = form.querySelectorAll('.next-btn');

  let currentStep = 0;

  showStep(currentStep);

  // Función para mostrar un paso específico del formulario
  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      step.classList.toggle('active', index === stepIndex);
    });
  }

  // Función para avanzar al siguiente paso
  function nextStep() {
    if (validateStep(currentStep)) {
      currentStep++;
      if (currentStep >= steps.length) {
        currentStep = steps.length - 1;
      }
      showStep(currentStep);
    }
  }

  // Función para retroceder al paso anterior
  function prevStep() {
    currentStep--;
    if (currentStep < 0) {
      currentStep = 0;
    }
    showStep(currentStep);
  }

  // Función para validar un paso
  function validateStep(stepIndex) {
    const step = steps[stepIndex];
    const inputs = step.querySelectorAll('input[required]');
    let isValid = true;

    // Verificar campos de entrada
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    });

    // Verificar selección de sucursal
    const select = step.querySelector('select#sucursal');
    if (select && !select.value) {
      isValid = false;
      select.classList.add('is-invalid');
      console.log('Selecciona una sucursal');
    } else if (select) {
      select.classList.remove('is-invalid');
    }

    return isValid;
  }

  // Agregar controladores de eventos a los botones Previo y Siguiente
  nextButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      nextStep();
    });
  });

  prevButtons.forEach(button => {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      prevStep();
    });
  });

  // Enviar formulario al último paso
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateStep(currentStep)) {
      // Mostrar alerta de confirmación
      Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas confirmar tu reserva?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, confirmar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          // Mostrar mensaje de éxito
          Swal.fire(
            '¡Reservado!',
            'Su reserva ha sido realizada con éxito. En unos momentos se le enviará por email y WhatsApp.',
            'success'
          ).then(() => {
            // Redirigir al index
            window.location.href = 'index.html';
          });
        }
      });
    }
  });
});

    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');

        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    });
