const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details")

const updateUI = ()=>{
    
}

const updateCity = async (city) => {
  const cityDets = await getCity(city);
  const weather = await getWeather(cityDets.key);
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
  .then((data)=>{
    console.log(data);
  }).catch(()=>{
      console.error("somthing was wrong");
  })
});
