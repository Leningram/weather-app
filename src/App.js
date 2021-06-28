import React, { Component } from "react";

import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

import SearchWeather from "./components/search-weather/searchWeather";
import ShowWeather from "./components/show-weather/show-weather";
import FavList from "./components/fav-cities-list/fav-cities-list";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            country: "",
            weather: "",
            favourites: JSON.parse(localStorage.getItem("cities")) || [] //получаем список избранных городов. Если его нет, присваиваем пустой массив
        };
        this.search = this.search.bind(this);
        this.addFav = this.addFav.bind(this);
        this.currentDate = this.currentDate.bind(this);
        this.removeFav = this.removeFav.bind(this);
        this.setCurrentCity = this.removeFav.bind(this);
    }

    search(city) {
        const api = {
            key: "a8c07f8a8d80fb52a4794b2fe34b7671",
            base: "https://api.openweathermap.org/data/2.5/"
        };

        fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
            .then((res) => res.json())
            .then((result) => {
                this.setState({ weather: result });
                this.setState({ city: "" });
            });
    }

    setCurrentCity() {}

    componentDidMount() {
        fetch("http://ip-api.com/json/")
            .then((res) => res.json())
            .then((result) => {
                this.setState({ city: result.city }); //Получаем текущий город по ip адрессу
                this.search(result.city); //показываем погоду текущего города
            });
    }

    addFav(city) {
        if (localStorage.getItem("cities")) {
            let cities = JSON.parse(localStorage.getItem("cities"));
            // Проверяем, есть ли такой город в избранном
            if (cities.indexOf(city) < 0) {
                cities.push(city); //если нет, добавляем
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
            const newArr = [...favourites.slice(0, index), ...favourites.slice(index + 1)]; //создаем новый массив без элемента с нужным индексом
            localStorage.setItem("cities", JSON.stringify(newArr)); //перезаписываем новый массив в localStorage

            return {
                favourites: newArr
            };
        });
    }

    //Конвертация текущей даты
    currentDate(data) {
        const months = [
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
        const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

        const day = days[data.getDay()];
        const date = data.getDate();
        const month = months[data.getMonth()];
        const year = data.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    }

    render() {
        const { city, weather, country, favourites } = this.state;
        return (
            <AppProvider i18n={enTranslations}>
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
                        <FavList favourites={favourites} removeFav={this.removeFav} onSearch={this.search} />
                    </main>
                </div>
            </AppProvider>
        );
    }
}
