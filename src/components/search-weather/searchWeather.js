import React, { Component } from "react";

import { TextField, Button, Form, FormLayout } from "@shopify/polaris";

export default class SearchWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e
        });
    }

    handleClearButtonClick() {
        this.setState({
            text: ""
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
            <Form onSubmit={this.onSubmit}>
                <FormLayout>
                    <TextField
                        label="Store name"
                        clearButton
                        onClearButtonClick={this.handleClearButtonClick}
                        onChange={this.onValueChange}
                        value={this.state.text}
                    />

                    <Button size="large" onClick={this.onSubmit}>
                        Показать
                    </Button>
                </FormLayout>
            </Form>
        );
    }
}
