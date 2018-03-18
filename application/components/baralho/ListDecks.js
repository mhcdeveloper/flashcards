import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    AsyncStorage, 
    TouchableOpacity,
    ScrollView
} from 'react-native';

import ItemList from './ItemList';
import { DECK_KEY } from '../../common/helpers/consts';

class ListDecks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            decks: {},
            refreshing: false,
        }
    }

    componentDidMount = () => {
        this.onRefresh();
    }
    
    onRefresh() {
        this.setState({ refreshing: true });
        AsyncStorage.getItem(DECK_KEY, (err, results) => {
            this.setState({ decks: JSON.parse(results), refreshing: false });
        });
    }

    render() {
        const { decks, refreshing } = this.state;
        const { navigation } = this.props;
        console.log(decks)
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} >
                    {decks && Object.keys(decks).map((title, i) => {
                    const deck = decks[title];
                    return (
                        <ItemList 
                            key={i}
                            item={deck}
                            navigation={navigation} />
                    )})
                    }
                </ScrollView>
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