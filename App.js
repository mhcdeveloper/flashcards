import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';

import { purple, white } from './application/common/colors';
import MainNavigation from './application/common/routes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: purple, height: Constants.statusBarHeight }}>
          <StatusBar translucent backgroundColor={purple} />
        </View>
        <View style={styles.container}>
          <MainNavigation />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
