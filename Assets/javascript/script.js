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
        console.log(cityName);
        var historyList = document.querySelector(".historyList");
        var historyElement = document.createElement("li");
        historyElement.textContent = cityName;
        historyList.appendChild(historyElement);
        historyElement.classList.add("historyElement")

        var cityName = currentWeatherData.name
        console.log(cityName);

        var currentIcon = currentWeatherData.weather[0].icon
        var currentIconUrl = `https://openweathermap.org/img/wn/${currentIcon}.png`
        var iconElement = document.createElement("img");
        iconElement.src = currentIconUrl;
        console.log(iconElement);

        var currentTemp = currentWeatherData.main.temp;
        console.log(currentTemp);

        var currentWind = currentWeatherData.wind.speed;
        console.log(currentWind);

        var currentHumidity = currentWeatherData.main.humidity;
        console.log(currentHumidity);

        var currentDate = new Date(currentWeatherData.dt * 1000);
        var dateSequence = {month: "long", day:"numeric", year: "numeric"};
        var formattedCurrentDate = currentDate.toLocaleDateString (undefined, dateSequence);
        console.log(formattedCurrentDate);

        var locationDateIcon = document.querySelector(".location-date-icon");
        locationDateIcon.textContent = `${cityName} (${formattedCurrentDate})`;
        locationDateIcon.appendChild(iconElement);

        var currentSection = document.querySelector(".currentSection");
        currentSection.innerHTML = "";
        
        var tempElement = document.createElement("li");
        tempElement.textContent = `Temperature: ${currentTemp} °C`;
        currentSection.appendChild(tempElement);
        
        var windElement = document.createElement("li");
        windElement.textContent = `Wind Speed: ${currentWind} KMPH`;
        currentSection.appendChild(windElement);
        
        var humidityElement = document.createElement("li");
        humidityElement.textContent = `Relative Humidity: ${currentHumidity} %`;
        currentSection.appendChild(humidityElement);
        

    });

    fetch(forecastWeatherApi)
        .then(response => response.json())
        .then(forecastWeatherData => {
        console.log(forecastWeatherData);
        for (var i = 0; i < 40; i++){
            if (i === 7) {
                var forecastDate = forecastWeatherData.list[i].dt_txt;
                console.log(forecastDate);

                var forecastIcon = forecastWeatherData.list[i].weather[0].icon
                var forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIcon}.png`
                var forecastIconElement = document.createElement("img");
                forecastIconElement.src = forecastIconUrl;
                console.log(forecastIconElement);

                var forecastTemp = forecastWeatherData.list[i].main.temp;
                console.log(forecastTemp);

                var forecastWind = forecastWeatherData.list[i].wind.speed;
                console.log(forecastWind);

                var forecastHumidity = forecastWeatherData.list[i].main.humidity;
                console.log(forecastHumidity);

                var forecastOne = document.querySelector(".forecastOne")
                forecastOne.classList.add("forecastCard")
                var forecastDateElement = document.createElement("h4")
                forecastDateElement.textContent = `${forecastDate}`
                forecastOne.appendChild(forecastDateElement)

                var forecastListOne = document.createElement("ul")
                forecastOne.appendChild(forecastListOne)

                forecastListOne.appendChild(forecastIconElement)
                
                var forecastTempElement = document.createElement("li");
                forecastTempElement.textContent = `Temp: ${forecastTemp} °C`;
                forecastOne.appendChild(forecastTempElement);
                
                var forecastWindElement = document.createElement("li");
                forecastWindElement.textContent = `Wind: ${forecastWind} KMPH`;
                forecastOne.appendChild(forecastWindElement);
                
                var forecastHumidityElement = document.createElement("li");
                forecastHumidityElement.textContent = `Humidity: ${forecastHumidity} %`;
                forecastOne.appendChild(forecastHumidityElement);
                
            } else if (i === 15) {
                var forecastDate = forecastWeatherData.list[i].dt_txt;
                console.log(forecastDate);

                var forecastIcon = forecastWeatherData.list[i].weather[0].icon
                var forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIcon}.png`
                var forecastIconElement = document.createElement("img");
                forecastIconElement.src = forecastIconUrl;
                console.log(forecastIconElement);

                var forecastTemp = forecastWeatherData.list[i].main.temp;
                console.log(forecastTemp);

                var forecastWind = forecastWeatherData.list[i].wind.speed;
                console.log(forecastWind);

                var forecastHumidity = forecastWeatherData.list[i].main.humidity;
                console.log(forecastHumidity);

                var forecastTwo = document.querySelector(".forecastTwo")
                forecastTwo.classList.add("forecastCard")
                var forecastDateElement = document.createElement("h4")
                forecastDateElement.textContent = `${forecastDate}`
                forecastTwo.appendChild(forecastDateElement)

                var forecastListTwo = document.createElement("ul")
                forecastTwo.appendChild(forecastListTwo)

                forecastListTwo.appendChild(forecastIconElement)
                
                var forecastTempElement = document.createElement("li");
                forecastTempElement.textContent = `Temp: ${forecastTemp} °C`;
                forecastTwo.appendChild(forecastTempElement);
                
                var forecastWindElement = document.createElement("li");
                forecastWindElement.textContent = `Wind: ${forecastWind} KMPH`;
                forecastTwo.appendChild(forecastWindElement);
                
                var forecastHumidityElement = document.createElement("li");
                forecastHumidityElement.textContent = `Humidity: ${forecastHumidity} %`;
                forecastTwo.appendChild(forecastHumidityElement);
            } else if (i === 23) {
                var forecastDate = forecastWeatherData.list[i].dt_txt;
                console.log(forecastDate);

                var forecastIcon = forecastWeatherData.list[i].weather[0].icon
                var forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIcon}.png`
                var forecastIconElement = document.createElement("img");
                forecastIconElement.src = forecastIconUrl;
                console.log(forecastIconElement);

                var forecastTemp = forecastWeatherData.list[i].main.temp;
                console.log(forecastTemp);

                var forecastWind = forecastWeatherData.list[i].wind.speed;
                console.log(forecastWind);

                var forecastHumidity = forecastWeatherData.list[i].main.humidity;
                console.log(forecastHumidity);

                var forecastThree = document.querySelector(".forecastThree")
                forecastThree.classList.add("forecastCard")
                var forecastDateElement = document.createElement("h4")
                forecastDateElement.textContent = `${forecastDate}`
                forecastThree.appendChild(forecastDateElement)

                var forecastListThree = document.createElement("ul")
                forecastThree.appendChild(forecastListThree)

                forecastListThree.appendChild(forecastIconElement)
                
                var forecastTempElement = document.createElement("li");
                forecastTempElement.textContent = `Temp: ${forecastTemp} °C`;
                forecastThree.appendChild(forecastTempElement);
                
                var forecastWindElement = document.createElement("li");
                forecastWindElement.textContent = `Wind: ${forecastWind} KMPH`;
                forecastThree.appendChild(forecastWindElement);
                
                var forecastHumidityElement = document.createElement("li");
                forecastHumidityElement.textContent = `Humidity: ${forecastHumidity} %`;
                forecastThree.appendChild(forecastHumidityElement);
            } else if (i === 31) {
                var forecastDate = forecastWeatherData.list[i].dt_txt;
                console.log(forecastDate);

                var forecastIcon = forecastWeatherData.list[i].weather[0].icon
                var forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIcon}.png`
                var forecastIconElement = document.createElement("img");
                forecastIconElement.src = forecastIconUrl;
                console.log(forecastIconElement);

                var forecastTemp = forecastWeatherData.list[i].main.temp;
                console.log(forecastTemp);

                var forecastWind = forecastWeatherData.list[i].wind.speed;
                console.log(forecastWind);

                var forecastHumidity = forecastWeatherData.list[i].main.humidity;
                console.log(forecastHumidity);

                var forecastFour = document.querySelector(".forecastFour")
                forecastFour.classList.add("forecastCard")
                var forecastDateElement = document.createElement("h4")
                forecastDateElement.textContent = `${forecastDate}`
                forecastFour.appendChild(forecastDateElement)

                var forecastListFour = document.createElement("ul")
                forecastFour.appendChild(forecastListFour)

                forecastListFour.appendChild(forecastIconElement)
                
                var forecastTempElement = document.createElement("li");
                forecastTempElement.textContent = `Temp: ${forecastTemp} °C`;
                forecastFour.appendChild(forecastTempElement);
                
                var forecastWindElement = document.createElement("li");
                forecastWindElement.textContent = `Wind: ${forecastWind} KMPH`;
                forecastFour.appendChild(forecastWindElement);
                
                var forecastHumidityElement = document.createElement("li");
                forecastHumidityElement.textContent = `Humidity: ${forecastHumidity} %`;
                forecastFour.appendChild(forecastHumidityElement);
            } else if (i === 39) {
                var forecastDate = forecastWeatherData.list[i].dt_txt;
                console.log(forecastDate);

                var forecastIcon = forecastWeatherData.list[i].weather[0].icon
                var forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIcon}.png`
                var forecastIconElement = document.createElement("img");
                forecastIconElement.src = forecastIconUrl;
                console.log(forecastIconElement);

                var forecastTemp = forecastWeatherData.list[i].main.temp;
                console.log(forecastTemp);

                var forecastWind = forecastWeatherData.list[i].wind.speed;
                console.log(forecastWind);

                var forecastHumidity = forecastWeatherData.list[i].main.humidity;
                console.log(forecastHumidity);

                var forecastFive = document.querySelector(".forecastFive")
                forecastFive.classList.add("forecastCard")
                var forecastDateElement = document.createElement("h4")
                forecastDateElement.textContent = `${forecastDate}`
                forecastFive.appendChild(forecastDateElement)

                var forecastListFive = document.createElement("ul")
                forecastFive.appendChild(forecastListFive)

                forecastListFive.appendChild(forecastIconElement)
                
                var forecastTempElement = document.createElement("li");
                forecastTempElement.textContent = `Temp: ${forecastTemp} °C`;
                forecastFive.appendChild(forecastTempElement);
                
                var forecastWindElement = document.createElement("li");
                forecastWindElement.textContent = `Wind: ${forecastWind} KMPH`;
                forecastFive.appendChild(forecastWindElement);
                
                var forecastHumidityElement = document.createElement("li");
                forecastHumidityElement.textContent = `Humidity: ${forecastHumidity} %`;
                forecastFive.appendChild(forecastHumidityElement);
            }
        }
    });

}

searchBtn.addEventListener('click', function(event) {
    var cityInput = document.querySelector("#locationInput").value;
    if(cityInput === ""){
        return
    } else {
        cityWeatherCall()
        locationSearch.value = ""
        var forecastOne = document.querySelector(".forecastOne");
        forecastOne.innerHTML = "";
        var forecastTwo = document.querySelector(".forecastTwo");
        forecastTwo.innerHTML = "";
        var forecastThree = document.querySelector(".forecastThree");
        forecastThree.innerHTML = "";
        var forecastFour = document.querySelector(".forecastFour");
        forecastFour.innerHTML = "";
        var forecastFive = document.querySelector(".forecastFive");
        forecastFive.innerHTML = "";
    }
})