import React ,{useState ,useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {Fumi} from 'react-native-textinput-effects';
import {Context as Auth} from '../../Context/AuthContext';
const E_Register = ({ navigation}) => {
  const {state,login,signup} = useContext(Auth)
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [username, setname] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainheading}>Register as Electio Commission </Text>
      </View>
      <Fumi
        label={'Name'}
        iconClass={FontAwesomeIcon}
        iconName={'pencil'}
        iconColor={'#4BA3C3'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        onChangeText={(text) => { setname(text) }}
      />
      <Fumi
        label={'Email'}
        iconClass={FontAwesomeIcon}
        iconName={'envelope-o'}
        iconColor={'#4BA3C3'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        onChangeText={(text) => { setemail(text) }}
      />
      <Fumi
        label={'Password'}
        iconClass={FontAwesomeIcon}
        iconName={'meh-o'}
        iconColor={'#4BA3C3'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
        onChangeText={(text) => { setpassword(text) }}
      />
      <View style={styles.btnstyl}>
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="user" size={25} color="black" />}
          title=" Register    "
          type="outline"
          iconRight={true}
          onPress={() =>{ 
            signup({username,email,password})
            console.log({email,password})
            console.log(state.e_user.email)
            if(state.e_user.email === email)
            navigation.navigate('E_Dashbord')
          }}
        />
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="long-arrow-left" size={25} color="black" />}
          title="   Go Home "
          type="outline"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default E_Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BA3C3',
    justifyContent: 'center',
  },
  btnstyl: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btn: {
    backgroundColor: '#FFF',
    borderRadius: 40,
    padding: 20,
  },
  mainheading: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
});
