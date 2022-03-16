const cityForm = document.querySelector("form");

const updateCity= async(city)=>{
    const cityDets = await getCity(city);
    const weather = 
}
cityForm.addEventListener("submit" , e=>{
    e.preventDefault();
    const city = cityForm.city.value.trim()
    cityForm.reset()
    updateCity(city)
})