import 'react-native-gesture-handler';
import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Screens/Src/Home';
import E_Auth from './Screens/Src/Election_commission/E_Auth';
import E_Register from './Screens/Src/Election_commission/E_Register';
import E_Login from './Screens/Src/Election_commission/E_Login';
import E_Dashbord from './Screens/Src/Election_commission/E_Dashbord';
import Add_Org from './Screens/Src/Election_commission/Add_Org';
import All_Org from './Screens/Src/Election_commission/All_Org';
import Verify_PO from './Screens/Src/Election_commission/Verify_PO';
import E_Profile from './Screens/Src/Election_commission/E_Profile';
import E_Chats from './Screens/Src/Election_commission/E_Chats';
import { Provider } from './Screens/Context/BlogContext';


const Stack = createStackNavigator();

const App=({navigation})=> {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="E_Profile">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="E_Auth" component={E_Auth} />
        <Stack.Screen name="E_Register" component={E_Register} />
        <Stack.Screen name="E_Login" component={E_Login} />
        <Stack.Screen name="E_Dashbord" component={E_Dashbord} />
        <Stack.Screen name="Add_Org" component={Add_Org} />
        <Stack.Screen name="All_Org" component={All_Org} />
        <Stack.Screen name="Verify_PO" component={Verify_PO} />
        <Stack.Screen name="E_Profile" component={E_Profile} />
        <Stack.Screen name="E_Chats" component={E_Chats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default ()=>{
  return(
    <Provider>
      <App />
    </Provider>
  );
};