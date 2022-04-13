import React, { Component } from "react";
import GotService from "../../services/gotService";
import CharCard from "../charCard";
import './randomChar.css'

export default class RandomChar extends Component {

    gotService = new GotService()

    state = {
        char: {},
        alive: true
    }

    componentDidMount() {
        this.updateChar()
    }

    onCharLoaded = (char) => {
        this.setState({ char })
    }

    updateChar() {
        const id = Math.floor(Math.random() * 826 + 1)

        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
    }

    render() {

        return (
            <>
                <span className="random">
                    <CharCard />
                    <CharCard />
                    <CharCard />
                    <CharCard />
                </span>
            </>
        )
    }
}