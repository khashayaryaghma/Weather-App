const key = "SF0PHiW8pNJny6Z50EY3gdMfI38PvXil";
const getCity = async(city)=>{
    const base =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apiKey=${key}&q=${city}`  
    const res = await fetch(base + query)
}