import React from "react";
import { Component } from "react";

export default class ShowWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { weather, addToFav, date } = this.props;
        return typeof weather.main != "undefined" ? (
            <div>
                <div className="location-container">
                    <div className="location">
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div className="date">{date}</div>
                    <button onClick={() => addToFav(weather.name)}> Добавить в изранное </button>
                </div>
                <div className="weather-container">
                    <div className="temperature">{Math.round(weather.main.temp)}°C</div>
                </div>
            </div>
        ) : (
            ""
        );
    }
}
