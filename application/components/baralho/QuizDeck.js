import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation'

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

    answerType = (type) => {
        if(type === 'correct') {
            this.setState({ 
                correctAnswer: this.state.correctAnswer + 1, 
                position: this.state.position + 1, 
            });
        } else {
            this.setState({ 
                position: this.state.position + 1, 
            });
        }
    }

    resetOrBack = (action) => {
        if(action === 'back') {
            const backAction = NavigationActions.back()
            this.props.navigation.dispatch(backAction)
        } else {
            this.setState({
                position: 0,
                showAnswer: false,
                correctAnswer: 0
            })
        }
    }

    finishQuiz = () => {
        const { position, correctAnswer, deck } = this.state;
        let totalPerguntas = deck.questions.length;
        return (
            <View style={styles.container}>
                <View style={styles.questionContainer}>
                    <Text style={styles.textQuestion}>
                        {`Parabéns!! Você acertou ${correctAnswer} do total de ${totalPerguntas} perguntas.`}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.resetOrBack('back')}>
                        <Text style={styles.buttonText}>Back to Deck</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.resetOrBack('restart')}>
                        <Text style={styles.buttonText}>Restart Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render () {
        const { deck, position, showAnswer } = this.state;
        let totalPerguntas = deck.questions.length;
        if(position + 1 <= totalPerguntas) {
            return (
                <View style={styles.container}>
                    <Text>{`${position + 1}/${deck.questions.length}`}</Text>
                    <View style={styles.questionContainer}>
                        {showAnswer 
                            ?
                            <View>
                                <Text style={styles.textQuestion}>{deck.questions[position].answer}</Text> 
                                <TouchableOpacity
                                    onPress={() => this.showAnswer()}>
                                    <Text>Hidden Answer</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <Text style={styles.textQuestion}>{deck.questions[position].question}</Text>
                                <TouchableOpacity
                                    onPress={() => this.showAnswer()}>
                                    <Text>Show Answer</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.answerType('correct')}>
                                <Text style={styles.buttonText}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => this.answerType('incorrect')}>
                                <Text style={styles.buttonText}>Incorrect</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    {this.finishQuiz()}
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    questionContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textQuestion: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
    },
    button: {
        width: 300,
        backgroundColor: '#0082c9',
        borderRadius: 25,
        marginVertical: 3,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    },
    
})

export default QuizDeck;