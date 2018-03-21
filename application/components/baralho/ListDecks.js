import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList, 
    AsyncStorage, 
    TouchableOpacity,
    ScrollView,
    RefreshControl
} from 'react-native';

import { setLocalNotification } from '../../common/helpers/notifications';
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

    //Metodo life cycle responsavel por chamar o metodo que busca todos os deck e setar a logica de notification
    componentDidMount = () => {
        this.onRefresh();
        setLocalNotification();
    }
    
    //Metodo responsavel por buscar todos os decks da AsyncStorage
    onRefresh() {
        this.setState({ refreshing: true });
        AsyncStorage.getItem(DECK_KEY, (err, results) => {
            this.setState({ decks: JSON.parse(results), refreshing: false });
        });
    }

    render() {
        const { decks, refreshing } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView 
                    refreshControl={
                        <RefreshControl 
                            refreshing={refreshing}
                            onRefresh={this.onRefresh.bind(this)} />
                    }
                    style={styles.container} >
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