import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default class SearchWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
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
            <form onSubmit={this.onSubmit}>
                <TextField
                    onChange={this.onValueChange}
                    value={this.state.text}
                    id="standard-basic"
                    color="primary"
                    label="Введите город"
                />
                <Button size="large" variant="contained" color="primary" onClick={this.onSubmit}>
                    Показать
                </Button>
            </form>
        );
    }
}
