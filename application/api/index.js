import { AsyncStorage } from 'react-native';

import { DECK_KEY } from '../common/helpers/consts';

export function createDeck(key) {
    alert(key)
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
        [key]: {
            title: key,
            question: []
        }
    }));
}

export function submitQuestion(deck) {
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
        [deck.title]: {
            title: deck.title,
            question: [
                deck.question
            ]
        }
    }));
}