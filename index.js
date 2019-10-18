let tripsArray = [];
let formInputs = document.querySelector('form');
let destination = document.querySelector('#destination');
let startDate = document.querySelector('#start-date');
let endDate = document.querySelector('#end-date');
let type = document.querySelector('#type');
let description = document.querySelector('#description');
let btnSave = document.querySelector('#btn-save');
let cardArea = document.querySelector('.card-area');
let tripPrompt = document.querySelector('#no-trips');

formInputs.addEventListener('keyup', handleFormInputs);
btnSave.addEventListener('click', addTrip);
cardArea.addEventListener('click', deleteCard);
window.addEventListener('DOMContentLoaded', handlePageLoad);

function handlePageLoad() {
  instantiateTrips();
  populateCards(tripsArray);
  displayNoTripsMessage();
}

function handleFormInputs(e) {
  if (destination.value && startDate.value && endDate.value) {
    btnSave.disabled = false;
  } 
}

function populateCards(tripsArray) {
  tripsArray.forEach(trip => displayCard(trip))
}

function instantiateTrips() {
  var newArray = JSON.parse(localStorage.getItem('tripsArray')).map(function (trip) {
    return new Trip(trip.id, trip.destination, trip.startDate, trip.endDate, trip.type, trip.description);
  });

  tripsArray = newArray;
}

function addTrip() {
  let trip = new Trip(Date.now(), destination.value, startDate.value, endDate.value, type.value, description.value);

  tripsArray.push(trip);
  trip.saveToStorage(tripsArray);
  displayCard(trip);
  btnSave.disabled = true;
  displayNoTripsMessage();
  resetInputs();
}

function deleteCard(e) {
  e.target.closest('.trip-card').remove();
  var trip = findTrip(e);

  trip.deleteFromStorage(tripsArray);
  displayNoTripsMessage();
}

function findTrip(e) {
  var tripId = e.target.closest('.trip-card').getAttribute('data-id');
  var trip = tripsArray.find(function (trip) {
    return trip.id === parseInt(tripId);
  });

  return trip;
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

function displayNoTripsMessage() {
  if (tripsArray.length === 0) {
    tripPrompt.classList.remove('hidden');
  } else {
    tripPrompt.classList.add('hidden');
  }
}

function resetInputs() {
  destination.value = '';
  startDate.value = '';
  endDate.value = '';
  description.value = '';
}