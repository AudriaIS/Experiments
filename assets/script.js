// function refreshWeather(response) {let temperatureElement = document.querySelector('#temperature'); let temperature = response.data.temperature.current;  let cityElement = document.querySelector('#city');  console.log(temperature);  cityElement.innerHTML = response.data.city;  temperatureElement.innerHTML = Math.round(temperature);}

//function searchCity(city) {  let apiKey = 'f2b957891a99c0f7bo4abte66a43c0ba';  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;  console.log(apiUrl);
// axios.get(apiUrl).then(refreshWeather);}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector('#search-form-input');

  console.log(searchInput.value);
  let cityElement = document.querySelector('#city');
  cityElement.innerHTML = searchInput.value;
  // searchCity(searchInput.value);
}

let searchFormElement = document.querySelector('#search-form');
searchFormElement.addEventListener('submit', handleSearchSubmit);

// searchCity('Paris');
