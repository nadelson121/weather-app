// need to mark as "async"
/*let getWeatherFromNWS = function(){
    // await = waits at that line until data is fetched from the API server; 
    let weather_data = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,is_day,rain,snowfall,cloud_cover&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York&forecast_days=1")
}*/

let get_current_position = async function(){
    return new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(function(position){
        resolve(position)
      })
    })
  }

let position = await get_current_position();

let latitude = position.coords.latitude
let longitude = position.coords.longitude
/*let timezone = position.
let country = */

let weather_data_response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current=temperature_2m,is_day,rain,snowfall,cloud_cover&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FNew_York&forecast_days=1")

let weather_data = await weather_data_response.json()

let current_temperature = weather_data.current.temperature_2m

let current_temp_display = document.getElementById("current-temp")

current_temp_display.textContent = current_temperature + "°C"

let max_temperature = weather_data.daily.temperature_2m_max[0]

let max_temp_display = document.getElementById("high-temp")

max_temp_display.textContent = max_temperature + "°C"

let min_temperature = weather_data.daily.temperature_2m_min[0]

let min_temp_display = document.getElementById("low-temp")

min_temp_display.textContent = min_temperature + "°C"