// čtení dat z API a jejich zobrazování na stránce

import getWeatherIcon from './weather-icons';

export default class Weather {

    constructor() { }

    getWeather() {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Brno,cz&units=metric&lang=cz&appid=fb15805f3f2aa8306dd27f3c20008550")
            .then(response => response.json())
            .then(this.displayWeather)
            .catch(error => {
                console.log("Došlo k chybě");
            })
    }

    displayWeather(data) {

        let newIcon = getWeatherIcon(data.weather[0].id, data.weather[0].icon);

        let sunriseDate = new Date(data.sys.sunrise * 1000);
        let sunriseHours = sunriseDate.getHours();
        let sunriseMinutes = sunriseDate.getMinutes();
        let sunsetDate = new Date(data.sys.sunset * 1000);
        let sunsetHours = sunsetDate.getHours();
        let sunsetMinutes = sunsetDate.getMinutes();

        let cityEl = document.getElementById("mesto");
        let descEl = document.getElementById("popis");
        let tempEl = document.getElementById("teplota");
        let iconEl = document.getElementById("ikona");
        let windEl = document.getElementById("vitr");
        let humidEl = document.getElementById("vlhkost");
        let sunriseEl = document.getElementById("vychod");
        let sunsetEl = document.getElementById("zapad");

        cityEl.textContent = data.name;
        tempEl.textContent = Math.round(data.main.temp);
        descEl.textContent = data.weather[0].description;
        iconEl = newIcon.innerHTML;
        windEl.textContent = Number.parseFloat(data.wind.speed).toFixed(1);
        windEl.textContent = data.wind.speed;
        humidEl.textContent = data.main.humidity;
        sunriseEl.textContent = sunriseHours + ":" + sunriseMinutes;
        sunsetEl.textContent = sunsetHours + ":" + sunsetMinutes;

        console.log(data);

    }

}