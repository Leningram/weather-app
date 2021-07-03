import React from "react";
import { Component } from "react";
import Button from "@material-ui/core/Button";
import BookmarkIcon from "@material-ui/icons/Bookmark";

export default class ShowWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { weather, addFav, date } = this.props;
        return weather.main ? (
            <div className="result-container">
                <div className="location-container">
                    <div className="location">
                        {weather.name}, {weather.sys.country}
                    </div>
                    <div className="date">{date}</div>
                    <Button variant="outlined" color="primary" size="large" onClick={() => addFav(weather.name)}>
                        <BookmarkIcon fontSize="large" />
                        Добавить в изранное
                    </Button>
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
