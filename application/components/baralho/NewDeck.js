import React, { Component } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import { createDeck } from '../../api';

class NewDeck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    createDeck = () => {
        const { title } = this.state;
        createDeck(title);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textLabel}>What is the title of your new deck ?</Text>
                <TextInput 
                    underlineColorAndroid="transparent" 
                    placeholder="Title" 
                    placeholderTextColor='#0082c9'
                    style={styles.textInput}
                    onChangeText={title => this.setState({ title })}
                    />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={() => this.createDeck()}
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
    textLabel: {
        fontSize: 30,
        fontWeight: '400',
        margin: 30,
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

export default NewDeck;