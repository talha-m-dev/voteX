import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {Fumi} from 'react-native-textinput-effects';

const E_Login = ({route, navigation}) => {
  const {ref} = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainheading}>Login as {ref} </Text>
      </View>
     

      <View style={styles.btnstyl}>
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="user" size={25} color="black" />}
          title=" Login   "
          type="outline"
          iconRight={true}
          onPress={() => navigation.navigate('E_Dashbord')}
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

export default E_Login;

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
