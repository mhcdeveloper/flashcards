import { AsyncStorage } from 'react-native';

import { DECK_KEY } from '../common/helpers/consts';

export function createDeck(key) {
    return AsyncStorage.setItem(DECK_KEY, JSON.stringify(key))
}

function getDeck() {
    AsyncStorage.getItem(DECK_KEY, (err, result) => {
        alert(result);
    });
}

export function submitQuestion(deck, key) {
    return AsyncStorage.mergeItem(DECK_KEY, JSON.stringify({
        [key]: deck,
    }));
}