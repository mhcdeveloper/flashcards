import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Platform, 
    TouchableOpacity, Animated,
} from 'react-native';

import { white } from '../../common/colors';

class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        }
    }

    componentWillMount() {
        console.log(this.props.item);
    }

    openDetail = (item) => {
        const { bounceValue } = this.state;
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 200, toValue: 1.04 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4 })
        ]).start();
        this.props.navigation.navigate('DeckDetail', { item });
    }

    render() {
        const { bounceValue } = this.state;
        const { item } = this.props;
        return (
            <View style={styles.item}>
                <TouchableOpacity
                    onPress={() => this.openDetail(item)}>
                    <View>
                        <Animated.Text style={[ styles.title, {transform: [{scale: bounceValue}]} ]}>{item.title}</Animated.Text>
                        <Animated.Text style={[ styles.cards, {transform: [{scale: bounceValue}]} ]}>{item.numberCards}</Animated.Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
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
    },
    title: {
        fontSize: 18,
        fontWeight: '300',
    },
    cards: {
        fontSize: 18,
        textAlign: 'center'
    },
})

export default ItemList;