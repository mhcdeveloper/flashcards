import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation'

import { 
    clearLocalNotification, 
    setLocalNotification 
} from '../../common/helpers/notifications';

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

    //Metodo responsavel por mostrar a answer quando clicar no botão show answer
    showAnswer = () => {
        this.setState({ showAnswer: !this.state.showAnswer });
    }

    //Metodo responsavel pela onPress dos botões de respostas correct ou incorrect
    answerType = (type) => {
        //Responsavel por limpar a notificação caso o usuario inicia pelo menos uma question por dia
        //E em seguida ja programa a notificação para o dia seguinte
        clearLocalNotification()
            .then(setLocalNotification())
        
        //Verificação de qual botão esta vindo o onPress, caso seja correct entra no if e atualiza os valores de correct asnwer
        //Mas caso seja incorrect ele apenas atualiza a positon das question
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

    //Metodo responsavel pelo onPress do FinishQuiz, ou ele retorna ao DeckDetail ou reinicia o quiz
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

    //Metodo responsavel por mostrar o resultado final do quiz
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

        //Verifico se a position for menor que o total de question ele continua as question
        //Mas caso a position seja maior que a quantiade de questions ele reenderiza para o finishQuiz para mostrar o resultado
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
                                    <Text style={styles.textButton}>Question</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <Text style={styles.textQuestion}>{deck.questions[position].question}</Text>
                                <TouchableOpacity
                                    onPress={() => this.showAnswer()}>
                                    <Text style={styles.textButton}>Show Answer</Text>
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
    textButton: {
        fontSize: 20,
        fontWeight: '400',
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