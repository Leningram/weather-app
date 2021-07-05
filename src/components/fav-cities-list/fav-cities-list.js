import React from "react";
import { Component } from "react";

export default class FavList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const favourites = this.props.favourites.map((item, index) => {
            return (
                <li key={index}>
                    <span onClick={() => this.props.onSearch(item)}>{item}</span>
                    <button size="large" onClick={() => this.props.removeFav(index)}>
                        Удалить
                    </button>
                </li>
            );
        });

        return (
            <div className="weather--favourites">
                <ul>{favourites}</ul>
            </div>
        );
    }
}
