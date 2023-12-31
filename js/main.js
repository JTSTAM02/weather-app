const apiKey = "a9a57e468a763f78b091447412c6c924";
let weatherDiv; // used to display weather data later

function createForm() {
  const form = document.createElement("form");
  const container = document.createElement("div");
  container.classList.add("container"); // adds class of container to the div
  form.appendChild(container);

  const row1 = document.createElement("div");
  row1.classList.add("row", "justify-content-center", "mb-3");
  container.appendChild(row1);
  const col1 = document.createElement("div");
  col1.classList.add("col-md-12", "text-center");
  row1.appendChild(col1);

  const title = document.createElement("h1");
  title.textContent = "Weather App";
  title.style.margin = "20px";
  col1.appendChild(title);

  const row2 = document.createElement("div");
  row2.classList.add("row", "justify-content-center");
  container.appendChild(row2);
  const col2 = document.createElement("div");
  col2.classList.add("col-md-6", "text-center");
  row2.appendChild(col2);

  const label = document.createElement("label");
  label.setAttribute("for", "zipCodeInput");
  label.textContent = "Enter Zip Code:";
  col2.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "form-control");
  input.setAttribute("id", "zipCodeInput");
  input.required = true; // makes input necessary
  input.style.width = "200px";
  input.style.marginLeft = "auto"; 
  input.style.marginRight = "auto";
  col2.appendChild(input);

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn btn-primary mt-4 mb-4");
  button.textContent = "Get Weather";
  col2.appendChild(button);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); //keeps data on screen
    const zipCodeInput = document.getElementById("zipCodeInput");
    const zipCode = zipCodeInput.value;
    getWeatherData(zipCode);
    zipCodeInput.value = ""; //gives dropdown of previous entries
  });

  main.appendChild(form);

  weatherDiv = document.createElement("div");
  weatherDiv.classList.add("weatherDiv");
  main.appendChild(weatherDiv);
}

function getWeatherData(zipCode) {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

  axios
    .get(url)
    .then(response => {
      const weatherData = response.data;
      displayWeatherData(weatherData);
      removeErrorMessage(); // removes extra error message
    })
    .catch(error => {
      displayError("An error occurred while fetching weather data.");
      console.error(error);
    });
}
// removes error message after intiial display to show weather data
function removeErrorMessage() {
  const errorDiv = document.querySelector(".alert.alert-danger");
  if (errorDiv) {
    errorDiv.remove();
  }
}

function displayWeatherData(weatherData) {
  if (weatherData.cod !== 200) { // checks if status is not correct
    displayError("Invalid Zip Code. Please try again.");
    return;
  }

  weatherDiv.innerHTML = `
    <div class="container weatherDiv">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="weather-container">
            <table class="table">
              <thead>
                <tr class="text-center">
                  <th scope="col" colspan="2" style="background-color: #00FF7F;" class="header-cell">City</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>${weatherData.name}</td>
                </tr>
              </tbody>
            </table>

            <table class="table table-bordered">
              <thead>
                <tr class="text-center">
                  <th scope="col" colspan="3" style="background-color: #00FF7F" class="font-weight-bold">Temperature</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>Kelvin</td>
                  <td>Fahrenheit</td>
                  <td>Celsius</td>
                </tr>
                <tr class="text-center">
                  <td>${weatherData.main.temp} °K</td>
                  <td>${convertToFahrenheit(weatherData.main.temp)} °F</td>
                  <td>${convertToCelsius(weatherData.main.temp)} °C</td>
                </tr>
              </tbody>
            </table>

            <table class="table border border-dark">
              <thead>
                <tr class="text-center">
                  <th scope="col" colspan="1" style="background-color: #00FF7F" class="font-weight-bold">Condition</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>${weatherData.weather[0].description}</td> 
                </tr>
              </tbody>
            </table>

            <table class="table border border-dark">
              <thead>
                <tr class="text-center">
                  <th scope="col" colspan="1" style="background-color: #00FF7F" class="font-weight-bold">Other Info</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>
                    <img src="http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png" alt="Weather Icon">
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;
}


function displayError(message) {
  const errorDiv = document.querySelector(".alert.alert-danger");
  if (errorDiv) {
    errorDiv.remove();
  }

  const errorContainer = document.createElement("div");
  errorContainer.classList.add("container");
  errorContainer.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="alert alert-danger text-center" role="alert">
          ${message}
        </div>
      </div>
    </div>
  `;

  main.appendChild(errorContainer);

  // Remove any existing weather data
  weatherDiv.innerHTML = "";
}


function convertToFahrenheit(kelvin) {
  const fahrenheit = (kelvin - 273.15) * (9 / 5) + 32;
  return fahrenheit.toFixed(2); // toFixed stops after set amount of decimal points
}

function convertToCelsius(kelvin) {
  const celsius = (kelvin - 273.15);
  return celsius.toFixed(2);
}

// Call the createForm function to dynamically create the form
createForm();
