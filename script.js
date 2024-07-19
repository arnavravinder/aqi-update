document.getElementById('searchButton').addEventListener('click', displayWeather);

function displayWeather() {
    const location = document.getElementById('locationInput').value;
    if (!location) return;

    const currentWeather = getCurrentWeather(location);
    const forecast = getForecast(location);

    renderCurrentWeather(currentWeather);
    renderForecast(forecast);
}

function getCurrentWeather(location) {
//todo
    return {
        location: location,
        temperature: Math.floor(Math.random() * 30) + 20,
        condition: 'Sunny',
        icon: '☀️'
    };
}

function getForecast(location) {
//todo
    const forecastData = [];
    for (let i = 1; i <= 5; i++) {
        forecastData.push({
            day: `Day ${i}`,
            temperature: Math.floor(Math.random() * 30) + 20,
            condition: 'Partly Cloudy',
            icon: '⛅'
        });
    }
    return forecastData;
}

function renderCurrentWeather(weather) {
    const currentWeatherDiv = document.getElementById('currentWeather');
    currentWeatherDiv.innerHTML = `
        <h2>${weather.location}</h2>
        <p>${weather.icon} ${weather.condition}</p>
        <p>${weather.temperature}°C</p>
    `;
}

function renderForecast(forecast) {
    const forecastContainer = document.getElementById('forecast');
    forecastContainer.innerHTML = '';
    forecast.forEach(day => {
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('forecast-card');
        forecastCard.innerHTML = `
            <h3>${day.day}</h3>
            <p>${day.icon} ${day.condition}</p>
            <p>${day.temperature}°C</p>
        `;
        forecastContainer.appendChild(forecastCard);
    });
}
