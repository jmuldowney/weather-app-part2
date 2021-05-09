function formatTime(timestamp) {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  if (hours < 10) {
    return `0${hours}:${minutes}`;
  }
  if (minutes < 10) {
    return `${hours}:0${minutes}`;
  } else {
    return `${hours}:${minutes}`;
  }
}
function formatDate(timestamp) {
  let now = new Date();
  let dayIndex = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = now.getDay();
  let monthIndex = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = now.getMonth();
  let date = now.getDate();
  let year = now.getFullYear();
  return `${dayIndex[day]}<br/> ${monthIndex[month]} ${date}, ${year}`;
}

function displayWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let cityElement = document.querySelector("#city");
  let windElement = document.querySelector("#wind-speed");
  let humidityElement = document.querySelector("#humidity");
  let descriptionElement = document.querySelector("#description");
  let iconElement = document.querySelector("#current-weather-icon");
  let dateElement = document.querySelector("#date");
  let timeElement = document.querySelector("#time");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = response.data.main.humidity;
  descriptionElement.innerHTML = response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute("alt", response.data.weather[0].description);
  dateElement.innerHTML = formatDate(response.data.dt);
  console.log(response.data);
  timeElement.innerHTML = formatTime(response.data.dt);
}
let city = "New York";
let apiKey = "efa33d18dfb944c4cc64654a5590838f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);
