import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Kaede } from 'react-native-textinput-effects';

export default function Add_Org() {
  return (
    <View>
      <Kaede
    label={'Name of Orgnization'}
    inputPadding={16}
  />
  <Kaede
    label={'Website'}
    inputPadding={16}
  />
  <Kaede
    label={'Website'}
    inputPadding={16}
  />
  <Kaede
    label={'Website'}
    inputPadding={16}
  />
    </View>
  );
}

const styles = StyleSheet.create({});
