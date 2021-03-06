const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");

const updateUI = (data) => {
  // const cityDets = data.cityDets;
  // const weather = data.weather;

  //destructure
  const { cityDets, weather } = data;

  details.innerHTML = `<h5 class="my-3">${cityDets.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>          
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>`;

  //update the night/day & icon image
  // const iconSrc = `img/icons/${weather/WeatherIcon}.svg`
  // icon.src = iconSrc


  let timeSrc = weather.IsDayTime ? "image/day.jpg" : "image/night.jpg";
  
  // if (weather.IsDayTime) {
  //   timeSrc = "image/day.jpg";
  // } else {
  //   timeSrc = "image/night.jpg";
  // }
  time.src = timeSrc
  //remove the d-none class if present
  card.classList.remove("d-none");
};

const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.Key);
  return {
    cityDets,
    weather,
  };
};
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim();
  cityForm.reset();

  updateCity(city)
    .then((data) => updateUI(data))
    .catch(() => console.error("somthing was wrong"));
});
