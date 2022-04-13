import React, { Component } from "react";
import GotService from "../../services/gotService";
import CharCard from "../charCard";
import { CardBody, CardImg, Card, CardTitle, CardText, CardSubtitle, List } from "reactstrap";


export default class RandomChar extends Component {

    gotService = new GotService()

    state = {
        name: "Toxic Rick",
        gender: "Male",
        status: 'Dead',
        image: "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
        species: "Humanoid",
        type: "null"
    }

    componentDidMount() {
        this.updateChar()
    }

    updateChar() {
        const id = Math.floor(Math.random() * 826 + 1)
        this.gotService.getCharacter(id)
            .then((char) => {
                this.setState({
                    name: char.name,
                    gender: char.gender,
                    status: char.status,
                    image: char.image,
                    species: char.species,
                    type: char.type
                })
            })
    }

    render() {

        const { name, gender, status, image, species, type } = this.state

        return (
            <>
                <Card>
                    <CardImg
                        alt="image"
                        src={image}
                        top
                        width="100%"
                        className="charCard"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <span>{status}-{gender}</span>
                        </CardSubtitle>
                        <CardText>
                            Species: {species}
                        </CardText>
                        <CardText>
                            Type: {type}
                        </CardText>
                    </CardBody>
                </Card>
            </>
        )
    }
}