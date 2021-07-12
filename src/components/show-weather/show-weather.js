import React from "react";
import { Component } from "react";

export default class ShowWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { weather, addFav, date } = this.props;
        return weather.main ? (
            <div className="weather--result">
                <div className="weather--result__city">
                    {weather.name}, {weather.sys.country}
                </div>
                <div className="weather--result__data">{date}</div>
                <button className="secondary-btn" onClick={() => addFav(weather.name)}>
                    Добавить в изранное
                </button>
                <div className="weather--result__temperature">{Math.round(weather.main.temp)}°C</div>
            </div>
        ) : (
            ""
        );
    }
}
