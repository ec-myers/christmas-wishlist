class Trip {
  constructor(id, destination, duration, type, activities) {
    this.id = id;
    this.destination = destination;
    this.duration = duration;
    this.type = type;
    this.activities = activities;
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