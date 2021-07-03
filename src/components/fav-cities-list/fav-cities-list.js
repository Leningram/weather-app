import React from "react";
import { Component } from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

export default class FavList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const favourites = this.props.favourites.map((item, index) => {
            return (
                <li className="favourites-item" key={index}>
                    <Button variant="contained" color="secondary" onClick={() => this.props.removeFav(index)}>
                        <DeleteIcon />
                    </Button>
                    <span className="favouriteCity" onClick={() => this.props.onSearch(item)}>
                        {item}
                    </span>
                </li>
            );
        });

        return <div className="favourites">{favourites}</div>;
    }
}
