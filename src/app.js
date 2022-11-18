function displayTemperature(response) {
  console.log(response.data);
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = response.data.wind.speed;
}

let apiKey = "e63e6060bf09d0o6a94a3647te5cbfb5";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=pensacola&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
