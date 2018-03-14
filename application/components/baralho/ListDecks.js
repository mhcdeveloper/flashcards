import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, AsyncStorage } from 'react-native';

import ItemList from './ItemList';
import { DECK_KEY } from '../../common/helpers/consts';

class ListDecks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decks: []
        }
    }

    componentDidMount = () => {
        AsyncStorage.getItem(DECK_KEY, (err, decks) => {
            this.setState({ decks }),
            console.log(decks)
        });
    }

    render() {
        const { decks } = this.state;
        const { navigation } = this.props;
        console.log(decks)
        return (
            <View style={styles.container}>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={decks}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemList 
                                item={item} 
                                index={index} 
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