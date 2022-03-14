const key = "SF0PHiW8pNJny6Z50EY3gdMfI38PvXil";
const getCity = async(city)=>{
    const base =
      "http://dataservice.accuweather.com/loctions/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`  
    const res = await fetch(base + query);
    const data = await res.json()
    return data[0]
}
getCity("newyork")
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error("err");
})