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
        if (index === stepIndex) {
          step.style.display = 'block';
        } else {
          step.style.display = 'none';
        }
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
        const formData = new FormData(form);
        let confirmationHTML = '<ul>';
        for (let pair of formData.entries()) {
          confirmationHTML += `<li><strong>${pair[0]}:</strong> ${pair[1]}</li>`;
        }
        confirmationHTML += '</ul>';
        document.getElementById('confirmation').innerHTML = confirmationHTML;
        nextStep();
      }
    });
  }); 


//Menu Hamburguesa
/*document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.getElementById('menu-btn');
  const menuLinks = document.getElementById('menu-links');

  if (menuBtn && menuLinks) {
      menuBtn.addEventListener('click', function() {
          menuLinks.classList.toggle('active');
      });
  } else {
      console.error('El botón del menú o los enlaces del menú no se encontraron.');
  }
});*/

    document.addEventListener('DOMContentLoaded', function() {
        const menuBtn = document.querySelector('.menu-btn');
        const menu = document.querySelector('.menu');

        menuBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    });
