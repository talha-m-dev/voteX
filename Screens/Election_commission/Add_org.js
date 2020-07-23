import React, {useState} from 'react';
import {StyleSheet, Image, View, Text,TouchableOpacity} from 'react-native';
import { Kaede } from 'react-native-textinput-effects';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-elements';


export default function Add_Org() {
  const chooseImage = () => {
    let options = {
    title: 'Select Avatar', 
    cameraType: 'front',
    mediaType: 'photo' ,
    storageOptions: {
    skipBackup: true,
    path: 'images',
    },
    };
    ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
    if (response.didCancel) {
    console.log('User cancelled image picker');
    } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
    alert(response.customButton);
    } else {
    SetFileuri(response.uri) 
    }
    });
    }
  var [fileUri, SetFileuri] = useState();

 
  return (
    <View style={styles.container}>
      <View style={{
    alignSelf: 'center',
    marginTop: 35,
    }}>
    <Image
    style={{ height: 100, width: 150, borderRadius: 2, }}
    source={fileUri ? { uri: fileUri } : require('./assets/dummy.png')}
    />
    <TouchableOpacity style={styles.addPictureIcon} onPress={
    chooseImage
    }>
    <Icon name="camera" size={15}/>
    </TouchableOpacity>
    </View>
    
    <View style={styles.main}>
    <Kaede
    label={'Orgnization Name'}
    inputPadding={16}
      />
      <Kaede
        label={'Adress'}
        inputPadding={16}
      />
      <Kaede
        label={'Ph #'}
        inputPadding={16}
      />
    </View>
    <View style={styles.btn_con}>
    <Button
          buttonStyle={styles.btn}
          icon={<Icon name="check" size={25} color="black" />}
          title=" ADD Orgnization   "
          type="outline"
          iconRight={true}
          onPress={() => {
            navigation.navigate('Details');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#4BA3C3'
  },
  main:{
    marginTop:50,
    backgroundColor:'#4BA3C3'
  },
  addPictureIcon: {
    height: 30,
    width: 30,
    backgroundColor:'#4BA3C3',
    borderRadius: 50,
    position: 'absolute',
    left: 65,
    top: 75,
    justifyContent: 'center',
    alignItems: 'center',
    },
    btn_con: {
      flex: 1,
      padding: 70,
      justifyContent: 'space-around',
    },
    btn: {
      marginTop:200,
      paddingVertical: 25,
      
      backgroundColor:'#fff',
    },
});
