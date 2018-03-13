import { AsyncStorage } from 'react-native';

const baralhoKey = '@MyDeckStore:key';

export function createDeck({ key }) {
    return AsyncStorage.mergeItem(baralhoKey, JSON.stringify({
        key
    }))
}

export function submitQuestion({ deck, key }) {
    return AsyncStorage.mergeItem(baralhoKey, JSON.stringify({
        [key]: deck,
    }));
}