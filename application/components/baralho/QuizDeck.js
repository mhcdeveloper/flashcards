import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class QuizDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: '',
            position: 0,
            showAnswer: false,
            correctAnswer: 0
        }
    }

    componentWillMount() {
        const deck = this.props.navigation.state.params.deck;
        this.setState({ deck: deck })
    }

    showAnswer = () => {
        this.setState({ showAnswer: !this.state.showAnswer });
    }

    correctAnswer = () => {
        this.setState({ correctAnswer: this.state.correctAnswer + 1, position: this.state.position + 1 });
    }

    render () {
        // const { deck } = this.props.navigation.state.params.deck;
        const { deck, position, showAnswer } = this.state;
        let totalPerguntas = deck.questions.length;
        return (
            <View>
                <Text>{`${position + 1}/${deck.questions.length}`}</Text>
                {position <= totalPerguntas 
                    ? 
                    <View>
                        {showAnswer 
                            ?
                            <View>
                                <Text>{deck.questions[position].question}</Text> 
                                <TouchableOpacity
                                    onPress={() => this.showAnswer()}>
                                    <Text>Hidden Answer</Text>
                                </TouchableOpacity>
                                <View>
                                    <TouchableOpacity
                                        onPress={() => this.correctAnswer()}>
                                        <Text>Correct</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => this.incorrectAnswer()}>
                                        <Text>Incorrect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            :
                            <View>
                                <Text>{deck.questions[position].question}</Text>
                                <TouchableOpacity
                                    onPress={() => this.showAnswer()}>
                                    <Text>Show Answer</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    </View>
                    :
                    null
                    }
            </View>
        )
    }
}

export default QuizDeck;