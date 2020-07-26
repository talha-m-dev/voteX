import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import V_Dashbord_2 from './V_Dashbord_2';
import V_Profile from './V_Profile';
import Voting from './Voting';
import V_Chats from './V_Chats';
import V_Log_Out from './V_Log_Out';


const Tab = createBottomTabNavigator();

export default function V_Dashbord() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Voting') {
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
      <Tab.Screen name="Voting" component={Voting} />
      <Tab.Screen name="Chats" component={V_Chats} />
      <Tab.Screen name="Home" component={V_Dashbord_2} />
      <Tab.Screen name="Profile" component={V_Profile} />
      <Tab.Screen name="Log Out" component={V_Log_Out} />
    </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
