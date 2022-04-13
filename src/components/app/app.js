import React, { Component } from "react";
import { Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar/randomChar";

export default class App extends Component {
    render() {
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <RandomChar />
                </Container>
            </>

        )
    }
}