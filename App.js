import React from 'react';4
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CalculatorScreen from './src/screens/CalculatorScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import MedicalScreen from './src/screens/MedicalScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
/*
import Navigation from './config/Navigation';

export default () => <Navigation />;
*/

const navigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signin: SigninScreen,
      Signup: SignupScreen
    }),
    mainFlow: createStackNavigator({
        Home: HomeScreen,
        Calculator: CalculatorScreen,
        Profile: ProfileScreen,
        Medical: MedicalScreen,
        Calendar: CalendarScreen
        },{
        initialRouteName: "Home",
        defaultNavigationOptions: {
          title: 'Home',
          headerStyle:{backgroundColor:'orange'}
        }
      })
  });
  
  
  export default createAppContainer(navigator);
