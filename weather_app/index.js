const cityname = document.getElementById('cityname');
const search = document.getElementById('search-button') ;
const region = document.getElementById('region');
const localtime = document.getElementById('localtime');
const weather = document.getElementById('weather');


 async function getData(city) {
  const promise =  await fetch(`https://api.weatherapi.com/v1/current.json?key=e1a9da8aafa844279f3130055250302&q=${city}&aqi=no`)
  return promise.json() ;
}


search.addEventListener("click" , async () => {
  const value = cityname.value ;
  const resultdata =  await getData(value);
  console.log(resultdata);
  region.innerHTML = `${resultdata.location.name} , ${resultdata.location.region} , ${resultdata.location.country}` ;
  localtime.innerHTML = `${resultdata.location.localtime}`
  weather.innerHTML = `${resultdata.current.condition.text}`
  
})