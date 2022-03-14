const key = "SF0PHiW8pNJny6Z50EY3gdMfI38PvXil";
//get wheather
const getWeather = async(id)=>{
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`
    const res = await fetch(base + query)
    const data = await res.json();
    return data;
}

//get city
const getCity = async(city)=>{
    const base =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`  
    const res = await fetch(base + query);
    const data = await res.json()
    return data[0]
}

getCity("manchester")
.then((data)=>{
    return getWeather(data.Key)
}).then((data)=>{
    console.log(data);
})
.catch(()=>{
    console.error("somthing was wrong")
})
