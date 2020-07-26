import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import C_Dashbord_2 from './C_Dashbord_2';
import C_Profile from './C_Profile';
import Apply_C from './Apply_C';
import C_Chats from './C_Chats';
import C_Log_Out from './C_Log_Out';


const Tab = createBottomTabNavigator();

export default function C_Dashbord() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Apply') {
                iconName = focused ? 'locate': 'locate-outline';
              } 
              else if (route.name === 'Chats') {
                iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
              }
              else if (route.name === 'Home') {
                iconName = focused ? 'grid-sharp' : 'grid-outline';
              }
              else if (route.name === 'Profile') {
                iconName = focused ? 'heart-sharp' : 'heart-outline';
              }
              else if (route.name === 'Log Out') {
                iconName = focused ? 'happy-sharp' : 'happy-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })} initialRouteName="Home"
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
      <Tab.Screen name="Apply" component={Apply_C} />
      <Tab.Screen name="Chats" component={C_Chats} />
      <Tab.Screen name="Home" component={C_Dashbord_2} />
      <Tab.Screen name="Profile" component={C_Profile} />
      <Tab.Screen name="Log Out" component={C_Log_Out} />
    </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
