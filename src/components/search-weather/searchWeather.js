import React, { Component } from "react";

export default class SearchWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            autocomplete: []
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSearch(this.state.text);
        this.setState({
            text: ""
        });
    }

    render() {
        return (
            <form className="weather--form">
                <div class="input-wrapper">
                    <input
                        id="search-weather"
                        placeholder="Введите город... "
                        type="text"
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />
                    <label for="search-weather" class="fa fa-search input-icon"></label>
                </div>
                <button className="show--result__btn" onClick={this.onSubmit}>
                    Показать
                </button>
            </form>
        );
    }
}
