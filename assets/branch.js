function displayForecast(response) {
  let forecastHtml = '';
  response.data.daily.forEach(function (day, index) {
    if (index < 5) {
      // Convert temperatures from Celsius to Fahrenheit
      let maxTempF = Math.round((day.temperature.maximum * 9) / 5 + 32);
      let minTempF = Math.round((day.temperature.minimum * 9) / 5 + 32);

      forecastHtml += `<div class="weather-forecast-day">
          <div class="weather-forecast-date">${formatDay(day.time)}</div>
          
          <img src="${day.condition.icon_url}" class="weather-forecast-icon" />
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>${maxTempF}º</strong>
            </div>
            <div class="weather-forecast-temperature">${minTempF}º</div>
          </div>
        </div>`;
    }
  });
  let forecastElement = document.querySelector('#forecast');
  forecastElement.innerHTML = forecastHtml;
}
