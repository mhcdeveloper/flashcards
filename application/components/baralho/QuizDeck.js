import React, { Component } from 'react';
import { View, Text } from 'react-native';

class QuizDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: '',
            position: 1
        }
    }

    componentDidMount() {
        const deck = this.props.navigation.state.params.deck;
        this.setState({ deck: deck })
    }

    render () {
        const { deck, position } = this.state;
        console.log(deck[position].question)
        return (
            <View>
                <Text>{`${position}/${deck.length}`}</Text>
            </View>
        )
    }
}

export default QuizDeck;