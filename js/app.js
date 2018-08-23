const weather = new Weather('DALLAS');


function get_weather() {
  // Returns a promise
  weather.get_weather()
    .then(results => {
      console.log(results);
    })
    .catch(error => console.log(error));
}
