import React from 'react';
import { StyleSheet } from 'react-native';
/* Telas */ 

import { CalculatorsNavigation, TasksNavigation } from './CustomNavigation';
import DiseaseSearch from '../components/disease/DiseaseSearch';
import HomeScreen from '../components/homeScreen/HomeScreen';
import WorkSchedule from '../components/workSchedule/WorkSchedule';

/* Navegação */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarLabel:() => {return null},
          tabBarActiveTintColor: "#f38380",
          tabBarInactiveTintColor: "white",
          tabBarStyle: { 
            backgroundColor: "#56aa9d",
            paddingTop: 10,
          },
        }} >
          <Tab.Screen name="WorkSchedule" 
            component={WorkSchedule} 
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons reverse name="calendar-month-outline" color={color} size={35} />
              ),
            }}
            />
          <Tab.Screen name="Calculadoras" 
            component={CalculatorsNavigation} 
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons reverse name="calculator-variant" color={color} size={35} />
              ),
            }}
            />
          
           <Tab.Screen 
            name="Home"
            component={HomeScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons reverse name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Guia Doenças"

            options={{
               tabBarIcon: ({ color, size }) => (
                 <MaterialCommunityIcons reverse name="book-open-page-variant" color={color} size={35} />
             ),
           }}>
             {props => <DiseaseSearch {...props} searchText={""} />}
           </Tab.Screen>
          <Tab.Screen 
           name="Tasks"
            component={TasksNavigation} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons reverse name="account" color={color} size={35} />
              ),
            }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});

export default AppNavigation;