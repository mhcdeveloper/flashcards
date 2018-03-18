import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { submitQuestion } from '../../api';

class NewQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: '',
            answer: ''
        }
    }

    createQuestion = () => {
        const key = this.props.navigation.state.params.deck;
        key.question.push(this.state)
        submitQuestion(key);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TextInput 
                        underlineColorAndroid="transparent" 
                        placeholder="Question" 
                        placeholderTextColor='#0082c9'
                        onChangeText={(question) => this.setState({ question })}
                        style={styles.textInput}
                        />
                    <TextInput
                        underlineColorAndroid="transparent" 
                        placeholder="Answer" 
                        placeholderTextColor='#0082c9'
                        onChangeText={(answer) => this.setState({ answer })}
                        style={styles.textInput}
                         />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={() => this.createQuestion()} 
                        style={styles.button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center'
    },
    textInput: {
        color: '#0082c9',
        alignSelf: 'stretch',
        padding: 12,
        width: 350,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: '#fff',
        borderWidth: 0.6
    },
    buttoContainer: {
        flex: 1
    },
    button: {
        width: 300,
        backgroundColor: '#0082c9',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
        textAlign: 'center'
    }
})

export default NewQuestion;