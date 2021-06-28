import React, { Component } from "react";
import SearchWeather from "./components/search-weather/searchWeather";

const api = {
    key: "0750508cb95645cad3125fd092fb7871",
    base: "https://api.openweathermap.org/data/2.5/"
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            country: "",
            weather: ""
        };
        this.search = this.search.bind(this);
    }

    search(city) {
        console.log("it works!");
        // fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
        //     .then((res) => res.json())
        //     .then((result) => {
        //         this.setState({ weather: result });
        //         this.setState({ city: "" });
        //     });
    }

    currentDate(data) {
        let months = [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
        ];
        let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

        let day = days[data.getDay()];
        let date = data.getDate();
        let month = months[data.getMonth()];
        let year = data.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }

    render() {
        const { city, weather, country } = this.state;
        return (
            <div className="app">
                <main>
                    {/* <div className="search-container">
                        <input
                            type="text"
                            className="search-field"
                            placeholder="Поиск..."
                            onChange={(e) => this.setState({ city: e.target.value })}
                            value={city}
                        />
                    </div> */}
                    <SearchWeather onSearch={this.search} />
                    {typeof weather.main != "undefined" ? (
                        <div>
                            <div className="location-container">
                                <div className="location">
                                    {weather.name}, {weather.sys.country}
                                </div>
                                <div className="date">{this.currentDate(new Date())}</div>
                            </div>
                            <div className="weather-container">
                                <div className="temperature">{Math.round(weather.main.temp)}°C</div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                </main>
            </div>
        );
    }
}
