import React from 'react';4
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import Navigation from './config/Navigation';
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
        Home: Navigation
        },{
        initialRouteName: "Home",
        headerMode: 'none',
      }),
  });
  
  
  export default createAppContainer(navigator);
