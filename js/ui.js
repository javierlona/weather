class UI {
  constructor() {
    this.location = document.querySelector("#weather-location");    
    this.description = document.querySelector("#weather-description");
    this.temperature = document.querySelector("#weather-temperature");
    this.temperatureMin = document.querySelector("#weather-temperature-min");
    this.temperatureMax = document.querySelector("#weather-temperature-max");
    this.humidity = document.querySelector("#weather-humidity");
    this.windSpeed = document.querySelector("#weather-wind-speed");
  }

  paint(weather) {
    this.location.textContent = weather.name;
  }
}