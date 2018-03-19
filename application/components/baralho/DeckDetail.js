import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
} from 'react-native';

class DeckDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deck: {},   
        }
    }

    componentDidMount() {
        this.setState({ deck: this.props.navigation.state.params.item })
    }

    render() {
        const { deck } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text>{deck.title}</Text>
                    {/* <Text>{deck.questions}</Text> */}
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('NewQuestion', { deck: deck })}>
                        <Text style={styles.buttonText}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('QuizDeck', { deck: deck.questions })}>
                        <Text style={styles.buttonText}>Start Quiz</Text>
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
        flex: 3
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
    },
})

export default DeckDetail;