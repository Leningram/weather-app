import React, { Component } from "react";
import SearchWeather from "./components/search-weather/searchWeather";
import ShowWeather from "./components/show-weather/show-weather";
import FavList from "./components/fav-cities-list/fav-cities-list";

const api = {
    key: "a8c07f8a8d80fb52a4794b2fe34b7671",
    base: "https://api.openweathermap.org/data/2.5/"
};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            country: "",
            weather: "",
            favourites: JSON.parse(localStorage.getItem("cities")) || []
        };
        this.search = this.search.bind(this);
        this.addFav = this.addFav.bind(this);
        this.currentDate = this.currentDate.bind(this);
        this.removeFav = this.removeFav.bind(this);
    }

    search(city) {
        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                this.setState({ weather: result });
                this.setState({ city: "" });
            });
    }

    addFav(city) {
        if (localStorage.getItem("cities")) {
            let cities = JSON.parse(localStorage.getItem("cities"));
            // Проверяем, есть ли такой город в избранном
            if (cities.indexOf(city) < 0) {
                cities.push(city);
                localStorage.setItem("cities", JSON.stringify(cities));
                this.setState({ favourites: cities });
            }
        } else {
            let cities = [city];
            localStorage.setItem("cities", JSON.stringify(cities));
            this.setState({ favourites: cities });
        }
    }

    removeFav(index) {
        this.setState(({ favourites }) => {
            const before = favourites.slice(0, index);
            const after = favourites.slice(index + 1);
            const newArr = [...before, ...after];
            localStorage.setItem("cities", JSON.stringify(newArr));

            return {
                favourites: newArr
            };
        });
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
        const { city, weather, country, favourites } = this.state;
        return (
            <div className="app">
                <main>
                    <SearchWeather onSearch={this.search} />

                    <ShowWeather
                        addFav={this.addFav}
                        weather={weather}
                        city={city}
                        country={country}
                        date={this.currentDate(new Date())}
                    />
                    <FavList favourites={favourites} removeFav={this.removeFav} />
                </main>
            </div>
        );
    }
}
