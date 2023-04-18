const form = document.querySelector('form');
    
      form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const nameInput = document.getElementById('nameInput');
        const emailInput = document.getElementById('emailInput');
        const dateInput = document.getElementById('dateInput');
        const timeInput = document.getElementById('timeInput');
        const numberInput = document.getElementById('numberInput');
    
        const details = `
         <p><strong>Nombre:</strong> ${nameInput.value}</p>
         <p><strong>Correo electrónico:</strong> ${emailInput.value}</p>
         <p><strong>Fecha:</strong> ${dateInput.value}</p>
        <p><strong>Hora:</strong> ${timeInput.value}</p>
          <p><strong>Número de personas:</strong> ${numberInput.value}</p>
        `;

        const reservationDetails = document.createElement('div');
        reservationDetails.innerHTML = `
          <h3 style="text-align:center">Detalles de la reserva</h3>
          <div style="text-align:center">
            ${details}
            </div>
            <p style="text-align:center; font-size: 2em;">¡Reserva realizada con éxito!</p>
          `;

          const reservationContainer = document.createElement('div');
          reservationContainer.classList.add('reservation-container');
          reservationContainer.appendChild(reservationDetails);

          const reservationForm = document.querySelector('.col-md-6.offset-md-3');
          reservationForm.innerHTML = '';
          reservationForm.appendChild(reservationContainer);
      });