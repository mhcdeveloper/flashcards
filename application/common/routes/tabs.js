import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import { purple, white } from '../colors';
import ListDecks from '../../components/baralho/ListDecks';
import NewDeck from '../../components/baralho/NewDeck';

const Tabs = TabNavigator({
    ListDecks: {
        screen: ListDecks,
        navigationOptions: {
            tabBarLabel: 'Lista',
            tabBarIcon: ({ tintColor }) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New',
            tabBarIcon: ({ tintColor }) => <FontAwesome name="plus-square" size={30} color={tintColor} />
        }
    }
},  
    {
      navigationOptions: {
          header: null
      },
      tabBarOptions: {
          activeTintColor: Platform.Os === 'ios' ? purple : white,
          style: {
              height: 56,
              backgroundColor: Platform.OS === 'ios' ? white: purple,
              shadowColor: 'rgba(0, 0, 0, 0.24)',
              shadowOffset: {
                  width: 0,
                  height: 3
              },
              shadowRadius: 6,
              shadowOpacity: 1
          }
      }
});

export default Tabs;