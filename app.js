let Weather_field = document.querySelector("#Weather_field");
let btn = document.querySelector("#btn");
let weatherBox = document.querySelector(".weatherBox");

btn.addEventListener("click", searchWeather);

function searchWeather() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=4baef04863ca403b91b231725242411&q=${Weather_field.value}&aqi=no`)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            
            weatherBox.innerHTML = `
                <div class="weather-info">
                    <img src="${res.current.condition.icon}">
                    <h2 id="location">Location: ${res.location.name}, ${res.location.country}</h2>
                    <p id="temperature">Temperature: ${res.current.temp_c}°C</p>
                    <p id="description">Condition: ${res.current.condition.text}</p>
                </div>
            `;  
        })
        .catch((err) => {
            console.error("Error:", err); 
            weatherBox.innerHTML = `<p class="error": red;">Unable to fetch weather data. Please check the city name.</p>`;
        });
}
