import { AsyncStorage } from 'react-native';

import { DECK_KEY } from '../common/helpers/consts';

export function createDeck(key) {
    alert(key)
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
        [key]: {
            title: key,
            questions: []
        }
    }));
}

function getDeck(key) {
    return AsyncStorage.getItem(DECK_KEY)
        .then(decks => {
            decks = JSON.parse(decks) || []
            return decks[key]
            // return decks.filter(deck => deck.key === key)
        })
}

export function submitQuestion(key, card) {
    // return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
    //     [deck.title]: {
    //         title: deck.title,
    //         questions: [
    //             ...deck.questions
    //         ]
    //     }
    // }));

    return getDeck(key) //implementa essa função na tua API
        .then(deck => {
            deck.questions.push(card),
            AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
                [key]: deck
            }))
        })
}