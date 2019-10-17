let tripsArray = [];
let formInputs = document.querySelector('form');
let destination = document.querySelector('#destination');
let startDate = document.querySelector('#start-date');
let endDate = document.querySelector('#end-date');
let type = document.querySelector('#type');
let description = document.querySelector('#description');
let btnSave = document.querySelector('#btn-save');

formInputs.addEventListener('keyup', handleFormInputs);
btnSave.addEventListener('click', addTrip);

function handleFormInputs(e) {
  if (destination.value && startDate.value && endDate.value) {
    btnSave.disabled = false;
  } 
}

function addTrip() {
  let newTrip = new Trip(Date.now(), destination.value, startDate.value, endDate.value, type.value, description.value);

  tripsArray.push(newTrip);
  console.log(tripsArray)
}
