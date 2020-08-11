import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';
import {Fumi} from 'react-native-textinput-effects';

const C_Register = ({route, navigation}) => {
  const {ref} = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainheading}>Register as {ref} </Text>
      </View>
      <Fumi
        label={'Name'}
        iconClass={FontAwesomeIcon}
        iconName={'pencil'}
        iconColor={'#4BA3C3'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
      />
      <Fumi
        label={'Email'}
        iconClass={FontAwesomeIcon}
        iconName={'envelope-o'}
        iconColor={'#4BA3C3'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
      />
      <Fumi
        label={'Password'}
        iconClass={FontAwesomeIcon}
        iconName={'meh-o'}
        iconColor={'#4BA3C3'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
      />
      <Fumi
        label={'Phone Number'}
        iconClass={FontAwesomeIcon}
        iconName={'volume-control-phone'}
        iconColor={'#4BA3C3'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
      />
      <View style={styles.btnstyl}>
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="user" size={25} color="black" />}
          title=" Register    "
          type="outline"
          iconRight={true}
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

export default C_Register;

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
