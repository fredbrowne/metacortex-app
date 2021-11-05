import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* Screen Import */
import HomeScreen from '../src/screens/HomeScreen';
import CalculatorScreen from '../src/screens/CalculatorScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import CalendarScreen from '../src/screens/CalendarScreen';
import MedicalScreen from '../src/screens/MedicalScreen';
import SigninScreen from '../src/screens/SigninScreen';
import SignupScreen from '../src/screens/SignupScreen';
import LoadingScreen from '../src/screens/LoadingScreen';
/* Icons Import */
import { Feather, SimpleLineIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack';

const navigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
      Signin: SigninScreen,
      Signup: SignupScreen
    }),
    mainFlow: createStackNavigator({
        Home: HomeScreen,
        SearchLocker: SearchLocker,
        Payment: PaymentScreen,
        TrackDelivery: TrackDeliveryScreen,
        PastOrder: PastOrderScreen,
        LockerShow: LockerShowScreen,
        PastTransferDetail: PastTransferDetail
        },{
        initialRouteName: "Home",
        defaultNavigationOptions: {
          title: 'TransferLocker',
          headerStyle:{backgroundColor:'orange'}
        }
      })
  });



/*

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
    <AppTabs.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#fa8072'
        }}>
        <AppTabs.Screen name="Calendar" component={CalendarScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" color={color} size={size} />
        )}}/>
        <AppTabs.Screen name="Calculator" component={CalculatorScreen} options={{

            tabBarIcon: ({ color, size }) => (
                <SimpleLineIcons name="calculator" color={color} size={size} />
          )}}/>
          <AppTabs.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <Feather name="home" color={color} size={size} />
          )}}/>
          <AppTabs.Screen name="Medical" component={MedicalScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="book-medical" color={color} size={size} />
          )}}/>
          <AppTabs.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" color={color} size={size} />
          )}}/>
    </AppTabs.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="SignIn" component={SigninScreen} />
        <AuthStack.Screen name="SignUp" component={SignupScreen} />
    </AuthStack.Navigator>
);

export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading);
        }, 500);
    }, []);

    if (isLoading) {
        return <LoadingScreen />
    }

    return (
        <NavigationContainer>
            {/*<AppTabsScreen />*/}
            {isLoading ? <LoadingScreen /> : user ? <AppTabs /> : <AuthStackScreen />}
            <AuthStackScreen />
        </NavigationContainer>

    );
};
*/



