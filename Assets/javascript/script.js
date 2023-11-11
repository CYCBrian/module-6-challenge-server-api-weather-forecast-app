var searchBtn = document.querySelector(".searchBtn")
var locationSearch = document.querySelector(".locationSearch")

function cityWeatherCall() {
    var cityName = document.querySelector("#locationInput").value;
    var cityNameLc = cityName.toLowerCase();
    var apiKey = "cdb95d81773dbc08c77d0f967e4cd495";
    var forecastWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityNameLc}&units=${"metric"}&appid=${apiKey}`;
    var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityNameLc}&units=${"metric"}&appid=${apiKey}`

    fetch(currentWeatherApi)
        .then(response => response.json())
        .then(currentWeatherData => {
        console.log(currentWeatherData);
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