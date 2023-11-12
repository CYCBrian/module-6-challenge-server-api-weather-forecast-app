var searchBtn = document.querySelector(".searchBtn")
var locationSearch = document.querySelector(".locationSearch")

function cityWeatherCall() {
    var cityInput = document.querySelector("#locationInput").value;
    var cityInputLc = cityInput.toLowerCase();
    var apiKey = "cdb95d81773dbc08c77d0f967e4cd495";
    var forecastWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputLc}&units=${"metric"}&appid=${apiKey}`;
    var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputLc}&units=${"metric"}&appid=${apiKey}`

    fetch(currentWeatherApi)
        .then(response => response.json())
        .then(currentWeatherData => {
        console.log(currentWeatherData);
        var cityName = currentWeatherData.name
        console.log(cityName)
        var currentIcon = currentWeatherData.weather[0].icon
        var currentIconUrl = `https://openweathermap.org/img/wn/${currentIcon}.png`
        console.log(currentIconUrl)
        var currentTemp = currentWeatherData.main.temp
        console.log(currentTemp)
        var currentWind = currentWeatherData.wind.speed
        console.log(currentWind)
        var currentHumidity = currentWeatherData.main.humidity
        console.log(currentHumidity)
        var currentDate = new Date(currentWeatherData.dt * 1000);
        var dateSequence = {month: "long", day:"numeric", year: "numeric"}
        var formattedCurrentDate = currentDate.toLocaleDateString (undefined, dateSequence)
        console.log(formattedCurrentDate);

    });

    fetch(forecastWeatherApi)
        .then(response => response.json())
        .then(forecastWeatherData => {
        console.log(forecastWeatherData);
    });

}

searchBtn.addEventListener('click', function(event) {
    cityWeatherCall()
    locationSearch.value = ""
})