let tripsArray = [];
let formInputs = document.querySelector('form');
let destinationInput = document.querySelector('#destination');
let startDateInput = document.querySelector('#start-date');
let endDateInput = document.querySelector('#end-date');
let btnSave = document.querySelector('#btn-save');

formInputs.addEventListener('keyup', handleFormInputs);

function handleFormInputs(e) {
  console.log('inside handle')
  if (destinationInput.value && startDateInput.value && endDateInput.value) {
    btnSave.disabled = false;
  } 
}
