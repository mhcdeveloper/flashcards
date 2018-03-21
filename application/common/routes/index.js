import { StackNavigator } from 'react-navigation';

import Tabs from './tabs';
import DeckDetail from '../../components/baralho/DeckDetail';
import NewQuestion from '../../components/baralho/NewQuestion';
import QuizDeck from '../../components/baralho/QuizDeck';
import { purple, white } from '../colors';

const MainNavigation = StackNavigator({
    Home: {
      screen: Tabs
    },
    DeckDetail: {
      screen: DeckDetail,
      navigationOptions: {
        headerTintColor: white,
        title: 'Deck Detail',
        headerStyle: {
          backgroundColor: purple
        }
      }
    },
    QuizDeck: {
      screen: QuizDeck,
      navigationOptions: {
        headerTintColor: white,
        title: 'Quiz',
        headerStyle: {
          backgroundColor: purple
        }
      }
    },
    NewQuestion: {
      screen: NewQuestion,
      navigationOptions: {
        headerTintColor: white,
        title: 'Add Card',
        headerStyle: {
          backgroundColor: purple
        }
      }
    }
})
  
export default MainNavigation;