const apiKey = "a9a57e468a763f78b091447412c6c924";
function createForm() {
  const main = document.getElementById("main");
  const form = document.createElement("form");
  form.classList.add("form-group");

  const label = document.createElement("label"); //dynamically creates text to Enter Zip Code
  label.setAttribute("for", "zipCodeInput");
  label.textContent = "Enter Zip Code:"; 

   const input = document.createElement("input"); // dynamically creates input box
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "zipCodeInput");
  input.required = true; 
  

  const title = document.createElement("h1");
  title.textContent = "Weather App";
  main.appendChild(title);

  const button = document.createElement("button"); // dynamically creates button
  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn btn-primary");
  button.textContent = "Get Weather";
  
  form.addEventListener("submit", function (event) { //calls for weather data when button is clicked
    event.preventDefault();
    const zipCodeInput = document.getElementById("zipCodeInput");
    const zipCode = zipCodeInput.value;
    getWeatherData(zipCode);
    zipCodeInput.value = "";
  });

  form.append(title);
  form.appendChild(label);
  form.appendChild(input);
  form.appendChild(button);
  main.appendChild(form);
}

function getWeatherData(zipCode) {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

  axios // API fetch request
    .get(url)
    .then(response => {
      const weatherData = response.data;
      displayWeatherData(weatherData);
    })
    .catch(error => {
      displayError("An error occurred while fetching weather data.");
      console.error(error);
    });
}

function displayWeatherData(weatherData) {
  const weatherDiv = document.getElementById("div");
  weatherDiv.classList.add("card");
  weatherDiv.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${weatherData.name}</h5>
        <p class="card-text">${weatherData.weather[0].description}</p>
        <p class="card-text">Temperature: ${weatherData.main.temp} K</p>
        <p class="card-text">Temperature: ${convertToFahrenheit(
          weatherData.main.temp
        )} °Fahrenheit</p>
        <p class="card-text">Temperature: ${convertToCelsius(
          weatherData.main.temp
        )} °Celsius</p>
        <img src="http://openweathermap.org/img/w/${
          weatherData.weather[0].icon
        }.png" alt="Weather Icon">
    </div>
  `;
        
  const existingWeatherDiv = document.getElementById("weather");
  if (existingWeatherDiv) {
    main.replaceChild(weatherDiv, existingWeatherDiv);
  } else {
    weatherDiv.setAttribute("id", "weather");
    main.appendChild(weatherDiv);
  }
}

function displayError(message) {
  const errorDiv = document.getElementById("div");
  errorDiv.innerHTML = `<p>${message}</p>`;
}

function convertToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(2);
}

function convertToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(2);
}

// Call the createForm function to dynamically create the form
createForm();
