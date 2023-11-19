// Select the search button, location search input, history container, clear button, and history list
var searchBtn = document.querySelector(".searchBtn");
var locationSearch = document.querySelector(".locationSearch");
var historyContainer = document.querySelector(".historyList");
var clearBtn = document.querySelector(".clearBtn");
var historyList;

// Add an event listener for when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    showHistory()
});

function showHistory() {
    // Retrieve the searched cities from local storage or initialize an empty array
    var searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];

    // Select the history list element
    historyList = document.querySelector(".historyList");

    // Iterate through each searched city
    searchedCities.forEach(function(cityName) {
        // Create a new history element
        var historyElement = document.createElement("li");

        // Set the text content of the history element to the city name
        historyElement.textContent = cityName;

        // Add the "historyElement" class to the history element
        historyElement.classList.add("historyElement");

        // Append the history element to the history list
        historyList.appendChild(historyElement);
    });
}

function cityWeatherCall() {
    // Get the city input value and convert it to uppercase
    var cityInput = document.querySelector("#locationInput").value;
    var cityInputLc = cityInput.toUpperCase();

    // Set the API key and the URLs for the forecast and current weather
    var apiKey = "cdb95d81773dbc08c77d0f967e4cd495";
    var forecastWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInputLc}&units=${"metric"}&appid=${apiKey}`;
    var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputLc}&units=${"metric"}&appid=${apiKey}`;

  // Fetch the current weather data
fetch(currentWeatherApi)
    .then(response => response.json())
    .then(currentWeatherData => {
    console.log(currentWeatherData);

        // Get the city name from the current weather data
        var cityName = currentWeatherData.name;
        console.log(cityName);

        // Retrieve the searched cities from local storage or initialize an empty array
        var searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];

        // Add the current city to the searched cities array
        searchedCities.push(cityName);

        // Store the updated searched cities array in local storage
        localStorage.setItem("searchedCities", JSON.stringify(searchedCities));

        // Select the history list element
        var historyList = document.querySelector(".historyList");

        // Create a new history element for the current city
        var historyElement = document.createElement("li");
        historyElement.textContent = cityName;
        historyList.appendChild(historyElement);
        historyElement.classList.add("historyElement");

        // Get the current weather icon URL
        var currentIcon = currentWeatherData.weather[0].icon;
        var currentIconUrl = `https://openweathermap.org/img/wn/${currentIcon}.png`;

        // Create an image element for the current weather icon
        var iconElement = document.createElement("img");
        iconElement.src = currentIconUrl;
        console.log(iconElement);

        // Get the current temperature, wind speed, humidity, and date
        var currentTemp = currentWeatherData.main.temp;
        var currentWind = currentWeatherData.wind.speed;
        var currentHumidity = currentWeatherData.main.humidity;
        var currentDate = new Date(currentWeatherData.dt * 1000);

        // Format the current date
        var dateSequence = { month: "long", day: "numeric", year: "numeric" };
        var formattedCurrentDate = currentDate.toLocaleDateString(undefined, dateSequence);
        console.log(formattedCurrentDate);

        // Update the location, date, and icon in the UI
        var locationDateIcon = document.querySelector(".location-date-icon");
        locationDateIcon.textContent = `${cityName} (${formattedCurrentDate})`;
        locationDateIcon.appendChild(iconElement);

        // Clear the current section in the UI
        var currentSection = document.querySelector(".currentSection");
        currentSection.innerHTML = "";

        // Create list elements for the temperature, wind speed, and humidity
        var tempElement = document.createElement("li");
        tempElement.textContent = `Temperature: ${currentTemp} °C`;
        currentSection.appendChild(tempElement);
    
        // Create list elements for the wind speed
        var windElement = document.createElement("li");
        windElement.textContent = `Wind Speed: ${currentWind} KMpH`;
        currentSection.appendChild(windElement);

        // Create list element for humidity
        var humidityElement = document.createElement("li");
        humidityElement.textContent = `Relative Humidity: ${currentHumidity} %`;
        currentSection.appendChild(humidityElement);
    });

    fetch(forecastWeatherApi)
        .then(response => response.json())
        .then(forecastWeatherData => {
        console.log(forecastWeatherData);
        for (var i = 0; i < 40; i++) {
            if (i === 7) {
                // Get the forecast date
                var forecastDate = forecastWeatherData.list[i].dt_txt;
                console.log(forecastDate);
  
                // Get the forecast icon
                var forecastIcon = forecastWeatherData.list[i].weather[0].icon;
                var forecastIconUrl = `https://openweathermap.org/img/wn/${forecastIcon}.png`;
                var forecastIconElement = document.createElement("img");
                forecastIconElement.src = forecastIconUrl;
                console.log(forecastIconElement);
  
                // Get the forecast temperature
                var forecastTemp = forecastWeatherData.list[i].main.temp;
                console.log(forecastTemp);
  
                // Get the forecast wind speed
                var forecastWind = forecastWeatherData.list[i].wind.speed;
                console.log(forecastWind);
  
                // Get the forecast humidity
                var forecastHumidity = forecastWeatherData.list[i].main.humidity;
                console.log(forecastHumidity);
  
                // Create forecast card element
                var forecastOne = document.querySelector(".forecastOne");
                forecastOne.classList.add("forecastCard");
  
                // Create forecast date element
                var forecastDateElement = document.createElement("h4");
                forecastDateElement.textContent = `${forecastDate}`;
                forecastOne.appendChild(forecastDateElement);
  
                // Create forecast list element
                var forecastListOne = document.createElement("ul");
                forecastOne.appendChild(forecastListOne);
  
                // Add forecast icon to forecast list
                forecastListOne.appendChild(forecastIconElement);
  
                // Create forecast temperature element
                var forecastTempElement = document.createElement("li");
                forecastTempElement.textContent = `Temp: ${forecastTemp} °C`;
                forecastOne.appendChild(forecastTempElement);
  
                // Create forecast wind speed element
                var forecastWindElement = document.createElement("li");
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
                forecastOne.appendChild(forecastWindElement);
  
                // Create forecast humidity element                
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
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
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
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
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
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
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
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
                forecastFive.appendChild(forecastWindElement);
                
                var forecastHumidityElement = document.createElement("li");
                forecastHumidityElement.textContent = `Humidity: ${forecastHumidity} %`;
                forecastFive.appendChild(forecastHumidityElement);
            }
        }
    });
}

// Add an event listener to the search button
searchBtn.addEventListener('click', function(event) {
    // Get the city input value
    var cityInput = document.querySelector("#locationInput").value;
  
    // If the city input is empty, return and do nothing
    if (cityInput === "") {
        return;
    } else {
        // Call the cityWeatherCall function to fetch weather data for the city
        cityWeatherCall();
  
        // Clear the location search input value
        locationSearch.value = "";
  
        // Clear the forecast sections in the UI
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
});

// same as cityWeatherCall(), less creating new history elements
function historyWeatherCall() {
    var historyInput = event.target.textContent;
    var historyInputLc = historyInput.toUpperCase();
  
    var apiKey = "cdb95d81773dbc08c77d0f967e4cd495";
    var forecastWeatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${historyInputLc}&units=${"metric"}&appid=${apiKey}`;
    var currentWeatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${historyInputLc}&units=${"metric"}&appid=${apiKey}`;
  
    fetch(currentWeatherApi)
        .then(response => response.json())
        .then(currentWeatherData => {
        console.log(currentWeatherData);
  
        var cityName = currentWeatherData.name;
        console.log(cityName);
  
        var currentIcon = currentWeatherData.weather[0].icon;
        var currentIconUrl = `https://openweathermap.org/img/wn/${currentIcon}.png`;
  
        var iconElement = document.createElement("img");
        iconElement.src = currentIconUrl;
        console.log(iconElement);
  
        var currentTemp = currentWeatherData.main.temp;
        var currentWind = currentWeatherData.wind.speed;
        var currentHumidity = currentWeatherData.main.humidity;
        var currentDate = new Date(currentWeatherData.dt * 1000);
  
        var dateSequence = { month: "long", day: "numeric", year: "numeric" };
        var formattedCurrentDate = currentDate.toLocaleDateString(undefined, dateSequence);
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
        windElement.textContent = `Wind Speed: ${currentWind} KMpH`;
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
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
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
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
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
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
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
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
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
                forecastWindElement.textContent = `Wind: ${forecastWind} KMpH`;
                forecastFive.appendChild(forecastWindElement);
                
                var forecastHumidityElement = document.createElement("li");
                forecastHumidityElement.textContent = `Humidity: ${forecastHumidity} %`;
                forecastFive.appendChild(forecastHumidityElement);
            }
        }
    });
}

// Add an event listener to the history container
historyContainer.addEventListener('click', function(event) {
    // Check if the clicked element matches the historyElement class
    if (event.target.matches('.historyElement')) {
      // Get the history input value
      var historyInput = event.target.textContent;
  
      // Retrieve the searched cities from local storage or initialize an empty array
      var searchedCities = JSON.parse(localStorage.getItem("searchedCities")) || [];
  
      // Iterate through the searched cities array
      for (var i = 0; i < searchedCities.length; i++) {
        // Check if the current city matches the history input value
        if (searchedCities[i] === historyInput) {
            // Call the historyWeatherCall function to fetch weather data for the selected city
            historyWeatherCall(historyInput);
  
            // Clear the location search input value
            locationSearch.value = "";
  
            // Clear the forecast sections in the UI
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
  
            // Exit the loop since we found a match
            break;
        }
      }
    }
});

// Function to clear searchedCities from local storage
function clearHistory() {
    localStorage.setItem("searchedCities", "[]");
}

// Add an event listener to the "Clear History" button
clearBtn.addEventListener('click', function(event) {
    // Run functions to clear searchedCities and update the displayed list
    clearHistory();
    historyList.innerHTML = "";
});