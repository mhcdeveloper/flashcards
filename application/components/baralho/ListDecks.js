import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, AsyncStorage, TouchableOpacity } from 'react-native';

import ItemList from './ItemList';
import { DECK_KEY } from '../../common/helpers/consts';

const data = [
    {
        id: '1',
        title: 'Teste',
        cards: '2'
    },
    {
        id: '1',
        title: 'Teste',
        cards: '2'
    },
    {
        id: '1',
        title: 'Teste',
        cards: '2'
    }
]

class ListDecks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decks: [],
            refreshing: false,
        }
    }

    componentDidMount = () => {
        // AsyncStorage.getItem(DECK_KEY)
        //     .then((results) => {
        //         alert(results)
        //         const decks = JSON.parse(results)
        //         console.log(decks)
        //         if(decks) {
        //             this.setState({ decks, refreshing: false });
        //         }
        //     })
        AsyncStorage.getItem(DECK_KEY, (err, results) => {
            console.log(results);
            const decks = JSON.parse(results)
                if(decks) {
                    this.setState({ decks, refreshing: false });
                }
        });
    }
    
    onRefresh = async () => {
        this.setState({ refreshing: true });
        // AsyncStorage.getItem(DECK_KEY ,(err, results) => {
        //     console.log(results);
        //     const decks = JSON.parse(results)
        //         if(decks) {
        //             this.setState({ decks, refreshing: false });
        //         }
        // });
        try {
            const result = await AsyncStorage.getItem(DECK_KEY);
            this.setState({ decks: result });
        } catch (error) {
            
        }
    }

    render() {
        const { decks, refreshing } = this.state;
        const { navigation } = this.props;
        console.log(decks)
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.onRefresh()}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <FlatList
                    refreshing={refreshing}
                    onRefresh={() => this.onRefresh()}
                    keyExtractor={(item, index) => index}
                    data={decks}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemList 
                                item={item} 
                                index={index}
                                data={decks} 
                                navigation={navigation}
                            />
                        );
                    }}>
                </FlatList>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    }
})

export default ListDecks;