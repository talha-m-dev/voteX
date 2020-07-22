import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Home';
import Auth from './Screens/Auth';
import Register from './Screens/Register';
import Login from './Screens/Login';
import E_Dashbord from './Screens/Election_commission/E_Dashbord';
import Add_Org from './Screens/Election_commission/Add_Org';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Auth} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="E_Dashbord" component={E_Dashbord} />
        <Stack.Screen name="Add_Org" component={Add_Org} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
