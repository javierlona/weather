const weather = new Weather('DALLAS');
const ui = new UI();

document.addEventListener('DOMContentLoaded', get_weather, false);

function get_weather() {
  // Returns a promise
  weather.get_weather()
    .then(results => {
      console.log(results);
      ui.paint(results);
    })
    .catch(error => console.log(error));
}
