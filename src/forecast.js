import Weather from "./weather";
const weather = new Weather();
weather.getWeather();

export default class Forecast {

    constructor() { }

    getForecast() {
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=Brno,cz&units=metric&lang=cz&appid=fb15805f3f2aa8306dd27f3c20008550")
            .then(response => response.json())
            .then(this.displayForecast)
            .catch(error => {
                console.log("Došlo k chybě");
            });
    }

    displayForecast(data) {
        
        let forecastOne = new Date(data.list[8].dt * 1000);
        let oneDate = forecastOne.getMonth();
        let oneDay = forecastOne.getDay();

        let forecastTwo = new Date(data.list[16].dt * 1000);
        let twoDate = forecastTwo.getMonth();
        let twoDay = forecastTwo.getDay();

        let forecastThree = new Date(data.list[24].dt * 1000);
        let threeDate = forecastThree.getMonth();
        let threeDay = forecastThree.getDay();

        let forecastFour = new Date(data.list[32].dt * 1000);
        let fourDate = forecastFour.getMonth();
        let fourDay = forecastFour.getDay();

        
        
       console.log(data);
    }

}

