import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { removeDeck } from '../../../api';
import { red } from '../../colors';

//Metodo responsavel por chamar o removeDeck passando o title e navigation para remover o deck e redirecionar para a home
function deleteDeck(title, navigation) {
    removeDeck(title, navigation);
}

const BtnDeleteDeck = ({ title, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => deleteDeck(title, navigation)}>
                <FontAwesome name="trash-o" size={30} color={red} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 6,
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 100,
        elevation: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default BtnDeleteDeck;