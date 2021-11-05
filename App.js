import React from 'react';
/* Navigation */
import Navigation from './config/Navigation';

export default () => <Navigation />;

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       screenOptions={{
//         tabBarInactiveTintColor: '#e91e63'
//       }}
//     >
//       <Tab.Screen
//         name="Calendar"
//         component={ CalendarScreen }
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: ({ color, size }) => (
//             <Feather name="calendar" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Calculator"
//         component={ CalculatorScreen }
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: ({ color, size }) => (
//             <SimpleLineIcons name="calculator" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Home"
//         component={ HomeScreen }
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: ({ color, size }) => (
//             <Feather name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Feed"
//         component={ MedicalScreen }
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome5 name="book-medical" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ ProfileScreen }
//         options={{
//           tabBarLabel: "",
//           tabBarIcon: ({ color, size }) => (
//             <FontAwesome name="user" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   )
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

