import React from "react";
import { Component } from "react";

import { Button } from "@shopify/polaris";

export default class FavList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const favourites = this.props.favourites.map((item, index) => {
            return (
                <li key={index}>
                    <span className="favouriteCity" onClick={() => this.props.onSearch(item)}>
                        {item}
                    </span>
                    <Button size="large" onClick={() => this.props.removeFav(index)}>
                        Удалить
                    </Button>
                </li>
            );
        });

        return <div className="favourites">{favourites}</div>;
    }
}
