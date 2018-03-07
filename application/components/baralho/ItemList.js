import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { white } from '../../common/colors';

const ItemList = ({ item, navigation }) => {
    return(
        <View style={styles.item}>
            <TouchableOpacity
                onPress={() => navigation.navigate('DeckDetail', { item: item })}>
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.numberCards}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    }
})

export default ItemList;