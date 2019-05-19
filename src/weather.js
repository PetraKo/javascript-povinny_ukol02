// čtení dat z API a jejich zobrazování na stránce
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
        // alert("ahoj");
        const cityEl = document.getElementById("mesto");
        const descEl = document.getElementById("popis");
        const tempEl = document.getElementById("teplota");
        const iconEl = document.getElementById("ikona");
        const windEl = document.getElementById("vitr");
        const humidEl = document.getElementById("vlhkost");
        const sunriseEl = document.getElementById("vychod");
        const sunsetEl = document.getElementById("zapad");

        cityEl.textContent = data.name;
        tempEl.textContent = data.main.temp;
        descEl.textContent = data.weather["0"].description;
        iconEl.src = `https://openweathermap.org/img/w/${data.weather["0"].icon}.png`;
        windEl.textContent = data.wind.speed;
        humidEl.textContent = data.main.humidity;
        sunriseEl.textContent = data.sys.sunrise;
        sunsetEl.textContent = data.sys.sunset;

        console.log(data);

    }

}