let tripsArray = [];
let formInputs = document.querySelector('form');
let destination = document.querySelector('#destination');
let startDate = document.querySelector('#start-date');
let endDate = document.querySelector('#end-date');
let type = document.querySelector('#type');
let description = document.querySelector('#description');
let btnSave = document.querySelector('#btn-save');
let cardArea = document.querySelector('.card-area');

formInputs.addEventListener('keyup', handleFormInputs);
btnSave.addEventListener('click', addTrip);

function handleFormInputs(e) {
  if (destination.value && startDate.value && endDate.value) {
    btnSave.disabled = false;
  } 
}

function addTrip() {
  let trip = new Trip(Date.now(), destination.value, startDate.value, endDate.value, type.value, description.value);

  tripsArray.push(trip);
  trip.saveToStorage(tripsArray);
  displayCard(trip);
  btnSave.disabled = true;
}

function displayCard(trip) {
  cardArea.insertAdjacentHTML('afterbegin', `<article class="trip-card" data-id="${trip.id}">
        <header>
          <h3 class="card-destination" contenteditable="true">${trip.destination}</h3>
        </header>
        <div class="card-content">
         <div class="card-duration">
          <p class="card-start-date" contenteditable="true">Start: ${trip.startDate}</p>
          <p class="card-end-date" contenteditable="true">End: ${trip.endDate}</p>
          </div>
          <p class="card-type">Type: ${trip.type}</p>  
          <p class="card-body" contenteditable="true">${trip.description}</p>
        </div>
        <footer>
          <img class="img-delete" src="images/delete-button.svg" alt="delete" id="btn-delete">
        </footer>
      </article>`);
}