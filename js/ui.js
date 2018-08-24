class UI {
  constructor() {
    // this.icon = document.querySelector("#weather-icon");
    this.location = document.querySelector("#weather-location");    
    this.description = document.querySelector("#weather-description");
    this.temperature = document.querySelector("#weather-temperature");
    this.temperatureMin = document.querySelector("#weather-temperature-min");
    this.temperatureMax = document.querySelector("#weather-temperature-max");
    this.humidity = document.querySelector("#weather-humidity");
    this.windSpeed = document.querySelector("#weather-wind-speed");
  }

  paint(weather) {
    // this.icon.setAttribute('src', "http://openweathermap.org/img/w/"+weather.weather['0'].icon+".png");
    this.location.textContent = weather.name;
    this.temperature.textContent = `${weather.main.temp}℉`;
    // Access the description element in the JSON array
    this.description.textContent = weather.weather['0'].description;
    this.temperatureMax.textContent = `Temp Max: ${weather.main.temp_max}℉`;
    this.temperatureMin.textContent = `Temp Min: ${weather.main.temp_min}℉`;
    this.humidity.textContent = `Humidity: ${weather.main.humidity}%`;
    this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed} mph`;
    console.log("http://openweathermap.org/img/w/"+weather.weather['0'].icon+".png");
  }
}