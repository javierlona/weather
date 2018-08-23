class Weather {
  constructor(city) {
    this.apiKey = "08b27b3e4865b869da9f43a00c1ca73d";
    this.city = city;
  }

  // Fetch weather from API
  async get_weather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=${this.apiKey}`);
  
    const responseData = await response.json();
    // Returns a promise
    return responseData;
  }
  // Change location
  change_location(city) {
    this.city = city;
  }

}
