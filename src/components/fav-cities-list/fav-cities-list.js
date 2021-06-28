import React from "react";
import { Component } from "react";

export default class FavList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <div>{this.props.favourites}</div>;
    }
}
