import React, { useState } from "react";

const api = {
    key: "0750508cb95645cad3125fd092fb7871",
    base: "https://api.openweathermap.org/data/2.5/"
};

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});

    const search = (item) => {
        if (item.key === "Enter") {
            fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
                .then((res) => res.json())
                .then((result) => {
                    setWeather(result);
                    setCity("");
                });
        }
    };

    const currentDate = (data) => {
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
    };

    return (
        <div className="app">
            <main>
                <div className="search-container">
                    <input
                        type="text"
                        className="search-field"
                        placeholder="Поиск..."
                        onChange={(e) => setCity(e.target.value)}
                        value={city}
                        onKeyPress={search}
                    />
                </div>
                {typeof weather.main != "undefined" ? (
                    <div>
                        <div className="location-container">
                            <div className="location">
                                {weather.name}, {weather.sys.country}
                            </div>
                            <div className="date">{currentDate(new Date())}</div>
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

export default App;
