// Initialize objects
const weather = new Weather('Dallas');
const ui = new UI();

const SUBMIT_BTN = document.querySelector("#submit-btn");

document.addEventListener('DOMContentLoaded', get_weather, false);
SUBMIT_BTN.addEventListener('click', change_location, false);

// console.log(SUBMIT_BTN);

function get_weather() {
  // Returns a promise
  weather.get_weather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(error => console.log(error));
}

function change_location() {
  // Get the city name the user entered
  const CITY = document.querySelector("#change-city").value;
  // Change the city name
  weather.change_location(CITY);
  // Call the function that handles displaying the weather data
  get_weather();

}