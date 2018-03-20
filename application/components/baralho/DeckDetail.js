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

    componentWillMount() {
        this.setState({ deck: this.props.navigation.state.params.item })
    }

    render() {
        const { deck } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.textHeader}>{deck.title}</Text>
                    <Text style={styles.textHeader}>{`${deck.questions.length} - Cards`}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('NewQuestion', { deck: deck })}>
                        <Text style={styles.buttonText}>Create New Question</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                        onPress={() => navigation.navigate('QuizDeck', { deck: deck })}>
                        <Text style={styles.buttonText}>Start a Quiz</Text>
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
    textHeader: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center',
    },
    buttoContainer: {
        flex: 1
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

export default DeckDetail;