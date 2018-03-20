import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation'

import { DECK_KEY } from '../common/helpers/consts';

//Metodo responsavel por criar um novo Deck e levar para tela de detail dele
export function createDeck(key, navigation) {
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
        [key]: {
            title: key,
            questions: []
        }
    })).then(res => {
        AsyncStorage.getItem(DECK_KEY, (err, results) => {
            const decks = JSON.parse(results);
            console.log(decks[key])
            navigation.navigate('DeckDetail', { item: decks[key] })
        });
    });
}

//Metodo responsavel por buscar um deck especifico
function getDeck(key) {
    return AsyncStorage.getItem(DECK_KEY)
        .then(decks => {
            decks = JSON.parse(decks) || []
            return decks[key]
        })
}

//Metodo responsavel por adicionar uma nova question ao deck
export function submitQuestion(key, card, navigation) {
    return getDeck(key) //implementa essa função na tua API
        .then(deck => {
            deck.questions.push(card),
            AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
                [key]: deck
            }))
            navigation.dispatch(resetAction);
        })
}

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'Home'})
    ]
});