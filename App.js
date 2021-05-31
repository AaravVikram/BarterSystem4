import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import Exchange from './screens/Exchange';
import HomeScreen from './screens/HomeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  HomeScreen: {screen: HomeScreen},
  Exchange: {screen: Exchange}
},
{
defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const rootName = navigation.state.routeName;
    if(routeName=="HomeScreen"){
      return(
        <Image source = {require("./assets/home-icon.png")} style = {{width: 20, height: 20}}/>
      )
    }
    else if(routeName=="Exchange"){
      return(
        <Image source = {require("./assets/ads-icon.png")} style = {{width: 20, height: 20}}/>
      )
    }
  }
})
}
)

const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  BottomTab: {screen: TabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
