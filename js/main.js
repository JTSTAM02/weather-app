const apiKey = "a9a57e468a763f78b091447412c6c924";
let weatherDiv = null;

function createForm() {
  const form = document.createElement("form");
  form.classList.add("form-group");

  const container = document.createElement("div");
  container.classList.add("container");
  form.appendChild(container);

  const row1 = document.createElement("div");
  row1.classList.add("row", "justify-content-center", "mb-3");
  container.appendChild(row1);
  const col1 = document.createElement("div");
  col1.classList.add("col-md-12", "text-center");
  row1.appendChild(col1);

  const title = document.createElement("h1");
  title.textContent = "Weather App";
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
  input.required = true;
  col2.appendChild(input);

  const button = document.createElement("button");
  button.setAttribute("type", "submit");
  button.setAttribute("class", "btn btn-primary mt-4 mb-4");
  button.textContent = "Get Weather";
  col2.appendChild(button);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const zipCodeInput = document.getElementById("zipCodeInput");
    const zipCode = zipCodeInput.value;
    getWeatherData(zipCode);
    zipCodeInput.value = "";
  });

  main.appendChild(form);

  weatherDiv = document.createElement("div");
  weatherDiv.classList.add("container", "table-container");
  main.appendChild(weatherDiv);
}

function getWeatherData(zipCode) {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}`;

  axios
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
  if (weatherData.cod === "404") {
    displayError("Invalid Zip Code. Please try again.");
    return;
  }

  weatherDiv.innerHTML = `
    <div class="container border-slash p-4">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class= "table-container position-relative">
          <table class="table border border-dark">
            <thead>
              <tr class="text-center">
                <th scope="col" colspan="2" style = "background-color: #00FF7F;" class="header-cell">City</th>
            </tr>
            </thead>
            <tbody>
            <tr class="text-center">
              <td>${weatherData.name}</td>
            </tr>
          </tbody>
        </table>

        <table class="table table-bordered border-dark">
          <thead>
            <tr class="text-center">
              <th scope="col" colspan="3" style = "background-color: #00FF7F" class="font-weight-bold">Temperature</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <td>Kelvin</td>
              <td>Fahrenheit</td>
              <td>Celsius</td>
            </tr>
            <tr class="text-center">
              <td>${weatherData.main.temp} K</td>
              <td>${convertToFahrenheit(weatherData.main.temp)} °F</td>
              <td>${convertToCelsius(weatherData.main.temp)} °C</td>
            </tr>
          </tbody>
        </table>

        <table class="table border border-dark">
          <thead>
            <tr class="text-center">
              <th scope="col" colspan="1" style = "background-color: #00FF7F" class="font-weight-bold">Condition</th>
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
              <th scope="col" colspan="1" style = "background-color: #00FF7F" class="font-weight-bold">Other Info</th>
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
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("container");
  errorDiv.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="alert alert-danger text-center" role="alert">
          ${message}
        </div>
      </div>
    </div>
  `;

  main.appendChild(errorDiv);
}

function convertToFahrenheit(kelvin) {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(2);
}

function convertToCelsius(kelvin) {
  return (kelvin - 273.15).toFixed(2);
}

// Call the createForm function to dynamically create the form
createForm();
