import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ItemList from './ItemList';

const baralhos = [
    {
        id: '1',
        title: 'Cards',
        numberCards: '4'
    },
    {
        id: '2',
        title: 'JavaScript',
        numberCards: '4'
    }
]

const ListDecks = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item, index) => index}
                data={baralhos}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    }
})

export default ListDecks;