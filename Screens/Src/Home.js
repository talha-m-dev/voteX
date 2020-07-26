/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, Dimensions, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.mainheading}> Hi, Welcome to{'\n'}voteX</Text>
      </View>

      <View style={styles.main}>
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="hand-peace-o" size={25} color="black" />}
          title=" Election Commission "
          type="outline"
          iconRight={true}
          onPress={() => {
            navigation.navigate('E_Auth', {
              ref: 'Election Commission',
            });
          }}
        />
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="commenting-o" size={25} color="black" />}
          title=" Presiding Officer   "
          type="outline"
          iconRight={true}
          onPress={() => {
            navigation.navigate('P_Auth', {
              ref: 'Presiding Officer',
            });
          }}
        />
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="slideshare" size={25} color="black" />}
          title=" Candidates     "
          type="outline"
          iconRight={true}
          onPress={() => {
            navigation.navigate('C_Auth', {
              ref: 'Candidates',
            });
          }}
        />
        <Button
          buttonStyle={styles.btn}
          icon={<Icon name="user" size={25} color="black" />}
          title=" Voters    "
          type="outline"
          iconRight={true}
          onPress={() => {
            navigation.navigate('V_Auth', {
              ref: 'Voters',
            });
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BA3C3',
    height: height,
    width: width,
  },
  head: {
    backgroundColor: '#4BA3C3',
    height: height / 3,
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
    paddingVertical: 20,
  },
});
