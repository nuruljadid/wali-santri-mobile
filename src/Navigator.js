// import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import SantriScreen from './screens/SantriScreen';
import SettingsScreen from './screens/SettingsScreen';

let screens = [
  HomeScreen,
  SantriScreen,
  SettingsScreen,
];

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: createBottomTabNavigator(
    screens.map(
      screen => Object.assign(
        createStackNavigator({ Links: screen }), {
        navigationOptions: screen.navigationOptions
      })
    )
  ),
}));