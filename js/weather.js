//Today's date
const today = new Date();
const options = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
};
const formattedDate = today.toLocaleDateString("en-US", options);

//Today's weather
const API_KEY = "f7ceab3877d02ac025918f8eef12d8fd";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector(".temperature");
      const weather = document.querySelector(".weather");
      const city = document.querySelector(".city");
      const dateToday = document.querySelector(".date-today");

      temperature.innerText = `${parseInt(data.main.temp)}°C`;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main}`;
      dateToday.innerText = formattedDate;
    });
}

function onGeoError() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
