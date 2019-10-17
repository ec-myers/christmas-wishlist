class Trip {
  constructor(id, destination, startDate, endDate, type, description) {
    this.id = id;
    this.destination = destination;
    this.startDate = startDate;
    this.endDate = endDate;
    this.type = type;
    this.description = description;
  }

  saveToStorage(array) {
    localStorage.setItem('tripsArray', JSON.stringify(array));
  }

  deleteFromStorage(array) {
    var tripId = this.id;
    var index = tripsArray.findIndex(function (trip) {
      return parseInt(trip.id) === tripId;
    });
    var newArray = array.splice(index, 1);

    this.saveToStorage(tripsArray);
  }

  updateIdea(title, body) {
    this.title = title;
    this.body = body;
  }
}