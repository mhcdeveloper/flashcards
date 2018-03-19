import React, { Component } from 'react';
import { View, Text } from 'react-native';

class QuizDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: {}
        }
    }

    componentDidMount() {
        const deck = this.props.navigation.state.params.deck;
        this.setState({ deck: deck })
    }

    render () {
        const { deck } = this.state;
        console.log(deck[1])
        return (
            <View>
                {Object.deck.map(item => console.log(item))}
            </View>
        )
    }
}

export default QuizDeck;