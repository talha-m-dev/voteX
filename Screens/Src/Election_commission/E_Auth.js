import React from 'react';
import {Text, StyleSheet, Dimensions, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Fumi} from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

const E_Auth = ({route, navigation}) => {
  const {ref} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.mainheading}>
          {' '}
          Welcome to{'\n'}
          {ref}
        </Text>
      </View>

      <View style={styles.main}>
        <View>
        <View style={styles.border}>
        <Fumi
        label={'Email'}
        iconClass={FontAwesomeIcon}
        iconName={'envelope-o'}
        iconColor={'#4BA3C3'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
      /></View>
      <View style={styles.border}>
      <Fumi
        label={'Password'}
        iconClass={FontAwesomeIcon}
        iconName={'meh-o'}
        iconColor={'#4BA3C3'}
        iconSize={20}
        iconWidth={40}
        inputPadding={16}
      />
      </View>
        </View>
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="user" size={25} color="black" />}
          title="Log in     "
          type="outline"
          iconRight={true}
          onPress={() => navigation.navigate('E_Dashbord', {ref})}
        />
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="check" size={25} color="black" />}
          title=" Register   "
          type="outline"
          iconRight={true}
          onPress={() => navigation.navigate('E_Register', {ref})}
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

export default E_Auth;

const styles = StyleSheet.create({
  border:{
    borderWidth:1,
    marginTop:15
  },
  container: {
    flex: 1,
    backgroundColor: '#4BA3C3',
    height: height,
    width: width,
  },
  head: {
    backgroundColor: '#4BA3C3',
    height: height / 4,
    justifyContent: 'center',
  },
  mainheading: {
    fontSize: 30,
    color: '#fff',
    textAlign: 'center',
  },
  main: {
    flex: 1,
    padding: 70,
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  btn: {
    paddingVertical: 15,
  },
});
