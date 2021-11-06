import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* Screen Import */
import HomeScreen from '../src/screens/HomeScreen';
import CalculatorScreen from '../src/screens/CalculatorScreen';
import ProfileScreen from '../src/screens/ProfileScreen';
import CalendarScreen from '../src/screens/CalendarScreen';
import MedicalScreen from '../src/screens/MedicalScreen';

/* Icons Import */
import { Feather, SimpleLineIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons'

/* Bottom Tab */
const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
    <AppTabs.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#fa8072',
        }}>
        {/*<AppTabs.Screen name="Calendar" component={CalendarScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="calendar" color={color} size={size} />
        )}}/>*/}
        <AppTabs.Screen name="Calculator" component={CalculatorScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <SimpleLineIcons name="calculator" color={color} size={size} />
        )}}/>
        <AppTabs.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <Feather name="home" color={color} size={size} />
        )}}/>
        <AppTabs.Screen name="Guia" component={MedicalScreen} options={{
              headerShown: false,
                tabBarIcon: ({ color, size }) => (
                <FontAwesome5 name="book-medical" color={color} size={size} />
        )}}/>
        {/*<AppTabs.Screen name="Profile" component={ProfileScreen} options={{
            tabBarIcon: ({ color, size }) => (
                <FontAwesome name="user" color={color} size={size} />
            )}}/>*/}
    </AppTabs.Navigator>
);

export default () => {
    return (
        <NavigationContainer>
            <AppTabsScreen />
        </NavigationContainer>

    );
};
