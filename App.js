import 'react-native-gesture-handler';
import  React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from './Screens/Context/AuthContext';
import Home from './Screens/Src/Home';
// import Intro from './Screens/Src/Intro';
/*Election Commission*/
import E_Auth from './Screens/Src/Election_commission/E_Auth';
import E_Register from './Screens/Src/Election_commission/E_Register';
import E_Login from './Screens/Src/Election_commission/E_Login';
import E_Dashbord from './Screens/Src/Election_commission/E_Dashbord';
import Add_Org from './Screens/Src/Election_commission/Add_Org';
import All_Org from './Screens/Src/Election_commission/All_Org';
import Verify_PO from './Screens/Src/Election_commission/Verify_PO';
import E_Profile_Edit from './Screens/Src/Election_commission/E_Profile_Edit';
import E_Chats from './Screens/Src/Election_commission/E_Chats';
import E_Profile from './Screens/Src/Election_commission/E_Profile';
import E_messages from './Screens/Src/Election_commission/E_messages';

/*Presiding Officer*/

import P_Auth from './Screens/Src/Presiding_Officer/P_Auth';
import P_Register from './Screens/Src/Presiding_Officer/P_Register';
import P_Login from './Screens/Src/Presiding_Officer/P_Login';
import P_Dashbord from './Screens/Src/Presiding_Officer/P_Dashbord';
import All_VO from './Screens/Src/Presiding_Officer/All_VO';
import Verify_VO from './Screens/Src/Presiding_Officer/Verify_VO';
import P_Profile from './Screens/Src/Presiding_Officer/P_Profile';
import P_Profile_Edit from './Screens/Src/Presiding_Officer/P_Profile_Edit';
import P_Chats from './Screens/Src/Presiding_Officer/P_Chats';
import Verify_C from './Screens/Src/Presiding_Officer/Verify_C';
import All_C from './Screens/Src/Presiding_Officer/All_C';
import P_Log_Out from './Screens/Src/Presiding_Officer/P_Log_Out';

/*Candidates*/

import C_Register from './Screens/Src/Candidate/C_Register';
import C_Login from './Screens/Src/Candidate/C_Login';
import C_Dashbord from './Screens/Src/Candidate/C_Dashbord';
import C_Auth from './Screens/Src/Candidate/C_Auth';


/*Voters*/

import V_Register from './Screens/Src/Voter/V_Register';
import V_Login from './Screens/Src/Voter/V_Login';
import V_Dashbord from './Screens/Src/Voter/V_Dashbord';
import V_Auth from './Screens/Src/Voter/V_Auth';

const Stack = createStackNavigator();

const App=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: 'papayawhip' }
        }}
        initialRouteName="Home">
          {/* <Stack.Screen name="Intro" component={Intro} /> */}
          <Stack.Screen name="Home" component={Home} />
          {/* Election Commission */}
        <Stack.Screen name="E_Auth" component={E_Auth} />
        <Stack.Screen name="E_Register" component={E_Register} />
        <Stack.Screen name="E_Login" component={E_Login} />
        <Stack.Screen name="E_Dashbord" component={E_Dashbord} />
        <Stack.Screen name="Add_Org" component={Add_Org} />
        <Stack.Screen name="All_Org" component={All_Org} />
        <Stack.Screen name="Verify_PO" component={Verify_PO} />
        <Stack.Screen name="E_Profile_Edit" component={E_Profile_Edit} />
        <Stack.Screen name="E_Profile" component={E_Profile} />
        <Stack.Screen name="E_Chats" component={E_Chats} />
        <Stack.Screen name="E_messages" component={E_messages} />

        {/*Presiding Officer*/}
        
        <Stack.Screen name="P_Auth" component={P_Auth} />
        <Stack.Screen name="P_Register" component={P_Register} />
        <Stack.Screen name="P_Login" component={P_Login} />
        <Stack.Screen name="P_Dashbord" component={P_Dashbord} />
        <Stack.Screen name="All_VO" component={All_VO} />
        <Stack.Screen name="Verify_VO" component={Verify_VO} />
        <Stack.Screen name="P_Profile_Edit" component={P_Profile_Edit} />
        <Stack.Screen name="P_Profile" component={P_Profile} />
        <Stack.Screen name="All_C" component={All_C} />
        <Stack.Screen name="Verify_C" component={Verify_C} />
        <Stack.Screen name="P_Log_Out" component={P_Log_Out} />
        <Stack.Screen name="P_Chats" component={P_Chats} />

        {/*Candidates*/}

        
        <Stack.Screen name="C_Auth" component={C_Auth} />
        <Stack.Screen name="C_Dashbord" component={C_Dashbord} />
        <Stack.Screen name="C_Login" component={C_Login} />
        <Stack.Screen name="C_Register" component={C_Register} />
        
    
        {/*Voters*/}

        <Stack.Screen name="V_Auth" component={V_Auth} />
        <Stack.Screen name="V_Dashbord" component={V_Dashbord} />
        <Stack.Screen name="V_Login" component={V_Login} />
        <Stack.Screen name="V_Register" component={V_Register} />

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