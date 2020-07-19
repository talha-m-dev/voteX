import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function E_Dashbord() {
  return (
    <View style={styles.main}>
      <LinearGradient
        colors={['#3A1C71', '#D76D77', '#FFAF7B']}
        style={styles.linearGradient}>
        <Avatar
          containerStyle={styles.avt}
          showEditButton
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
          size="xlarge"
          rounded
        />
      </LinearGradient>
      <View>
        <View style={styles.bord}>
          <Button
            buttonStyle={styles.btn}
            icon={
              <Icon
                reverse
                raised
                name="slideshare"
                size={25}
                color="#457b9d"
              />
            }
            title="Add Orgnization"
            type="outline"
            onPress={() => {
              navigation.navigate('Add_org');
            }}
          />
          <Button
            buttonStyle={styles.btn}
            icon={
              <Icon
                reverse
                raised
                name="slideshare"
                size={25}
                color="#457b9d"
              />
            }
            title="Add Orgnization"
            type="outline"
            onPress={() => {
              navigation.navigate('Add_org');
            }}
          />
          <Button
            buttonStyle={styles.btn}
            icon={
              <Icon
                reverse
                raised
                name="slideshare"
                size={25}
                color="#457b9d"
              />
            }
            title="Add Orgnization"
            type="outline"
            onPress={() => {
              navigation.navigate('Add_org');
            }}
          />
          <Button
            buttonStyle={styles.btn}
            icon={
              <Icon
                reverse
                raised
                name="slideshare"
                size={25}
                color="#457b9d"
              />
            }
            title="Add Orgnization"
            type="outline"
            onPress={() => {
              navigation.navigate('Add_org');
            }}
          />
          <Button
            buttonStyle={styles.btn}
            icon={
              <Icon
                reverse
                raised
                name="slideshare"
                size={25}
                color="#457b9d"
              />
            }
            title="Add Orgnization"
            type="outline"
            onPress={() => {
              navigation.navigate('Add_org');
            }}
          />
          <Button
            buttonStyle={styles.btn}
            icon={
              <Icon
                reverse
                raised
                name="slideshare"
                size={25}
                color="#457b9d"
              />
            }
            title="Add Orgnization"
            type="outline"
            onPress={() => {
              navigation.navigate('Add_org');
            }}
          />
          <Button
            buttonStyle={styles.btn}
            icon={
              <Icon
                reverse
                raised
                name="slideshare"
                size={25}
                color="#457b9d"
              />
            }
            title="Add Orgnization"
            type="outline"
            onPress={() => {
              navigation.navigate('Add_org');
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  avt: {
    alignSelf: 'center',
    margin: 50,
  },
  bord: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: 25,
  },
  card: {
    borderWidth: 5,
    margin: 7,
    backgroundColor: '#a8dadc',
    borderColor: '#3A1C71',
  },
  icon: {
    padding: 30,
  },
  btn: {
    margin: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,

    flexDirection: 'column',
  },
});
