//Changing the displayed time and date to show current time and day

let now = new Date();

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let timeNow = hours + ":" + minutes + " GMT";

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let currentDateTime = document.querySelector(".currentDateTime");
currentDateTime.innerHTML = `${day} ${timeNow}`;

//Changing the city to show searched city
//class of the city element to change is ".currentCity"
function updateCity(event) {
  event.preventDefault();

  if (input.value) {
    function getCityInfo(response) {
      let apiTemp = Math.round(`${response.data.main.temp}`);
      cityShown.innerHTML = `${input.value}`;
      currentTemp.innerHTML = `${apiTemp}`;
      let weatherDescription = `${response.data.weather[0].description}`;
      weatherType.innerHTML = `${weatherDescription}`;
      console.log(apiTemp);
    }
  } else {
    alert("Please type a city, I'm not a mind reader.");
  }

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getCityInfo);
}

let input = document.querySelector("#search");
let cityShown = document.querySelector(".currentCity");
let currentTemp = document.querySelector(".currentTemp");
let citySearch = document.querySelector("#search-form");
let weatherType = document.querySelector("#weatherType");
let apiKey = "a969311cfcbb4a83dfad2cf7478397f9";

citySearch.addEventListener("submit", updateCity);

function ediTempSet(response) {
  let originalTemp = Math.round(`${response.data.main.temp}`);
  currentTemp.innerHTML = `${originalTemp}`;

  let originalWeatherType = `${response.data.weather[0].description}`;
  weatherType.innerHTML = `${originalWeatherType}`;
}

let apiUrlEdi = `https://api.openweathermap.org/data/2.5/weather?q=edinburgh&appid=${apiKey}&units=metric`;
axios.get(apiUrlEdi).then(ediTempSet);

// BONUS
// Add a "Current" button that resets all of the above to the CURRENT location

// Personal BONUS
// Change the 5 day weather forecast
// Add associated emojis to different weather descriptions and auto update the emojis

//Changing the temp from Celsius to Fahrenheit and back on a click

// function celChange() {
//   tempToChange.innerHTML = "18";
// }

// function fahChange() {
//   tempToChange.innerHTML = "64.4";
// }

// let celsiusChange = document.querySelector(".celsius");
// let fahrChange = document.querySelector(".fahrenheit");
// let tempToChange = document.querySelector(".currentTemp");
// celsiusChange.addEventListener("click", celChange);
// fahrChange.addEventListener("click", fahChange);
