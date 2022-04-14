import React, { Component } from 'react'
import gotService from '../../services/gotService';
import ItemList from '../itemList';



export default class CharactersPage extends Component {

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

    

    render() {
        const { image } = this.state
        return (
            <>
                <ItemList src={image} />
            </>

        )
    }

}