import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../header";

export default class App extends Component {
    render() {
        return (
            <Container>
                <Header />
            </Container>
        )
    }
}