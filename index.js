const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
let cityName = "";
const inputValue = document.getElementById("input");
const weatherIcon = document.querySelector(".weather-icon");
const btn = document.getElementById("sbtn");
const apiKey = "8db6dd9a1d8ff1584f8e207940224096";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

btn.addEventListener("click", () => {
  cityName = inputValue.value;
  console.log(inputValue.value);

  checkWeather();
});

async function checkWeather() {
  const response = await fetch(apiUrl + `${cityName}` + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    temperature.textContent = Math.round(data.main.temp) + "°C";
    city.textContent = data.name;
    humidity.textContent = data.main.humidity + "%";
    wind.textContent = Math.round(data.wind.speed) + "Km/hr";

    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
