import React, { Component } from 'react'
import gotService from '../../services/gotService';
import { CardBody, CardImg, Card, CardTitle, CardText, CardSubtitle, } from "reactstrap";
import { FaCircle } from 'react-icons/fa';
import './itemList.css'



export default class ItemList extends Component {

    gotService = new gotService()

    state = {
        charList: []
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then((charList) => {
                this.setState({ charList })
            })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <Card
                    key={i}
                >
                    <CardImg
                        alt="image"
                        src={item.image}
                        top
                        width="100%"
                        className="charCard"
                    />
                    <CardBody>
                        <CardTitle tag="h5">
                            {item.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            <span className="span__circle">
                                <FaCircle className={item.status} />
                                {item.status}-{item.gender}
                            </span>
                        </CardSubtitle>
                        <CardText>
                            <span className="text-gray">Last known location:</span> {item.location.name}
                        </CardText>
                        <CardText>
                            <span className="text-gray">Species:</span> {item.species}
                        </CardText>
                        <CardText>
                            <span className="text-gray">Type:</span> {item.type || 'sorry no data :('}
                        </CardText>
                    </CardBody>
                </Card>
            )

        })
    }

    render() {
        const { charList } = this.state
        console.log(charList);

        const items = this.renderItems(charList)

        return (

            <div className='allCharacters'>
                {items}

            </div>

        )
    }

}