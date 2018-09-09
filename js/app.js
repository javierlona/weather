// Initialize storage object
const storage = new Storage();

// Grab city from localstorage if saved in local storage
const weatherLocationCity = storage.get_location_data();

// Access the object city
const weather = new Weather(weatherLocationCity.city);

// Initialize UI object
const ui = new UI();

// Declare and target the submit button
const submitBTN = document.querySelector("#submit-btn");

// Display the weather for the default city
document.addEventListener('DOMContentLoaded', get_weather, false);

// When the user changes city call function change_location
submitBTN.addEventListener('click', change_location, false);

function get_weather() {
  // Returns a promise
  weather.get_weather()
    .then(results => {
      // Results is the JSON file returned from API call
      ui.paint(results);
    })
    .catch(error => console.log(error));
}

function change_location() {
  // Get the city name the user entered
  const CITY = document.querySelector("#change-city").value;

  // Change the city name
  weather.change_location(CITY);

  // Set location in LS
  storage.set_location_data(CITY);

  // Call the function that handles displaying the weather data
  get_weather();
}
