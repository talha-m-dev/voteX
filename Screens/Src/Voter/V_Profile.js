            
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon  from 'react-native-vector-icons/FontAwesome';

export default function V_Profile(params) {
    
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
  const onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

    return (
      <View style={styles.container}>
          <View style={{
                alignSelf: 'center',
                margin:20,
                }}>
                <Image
                style={{ height: 100, width: 100, borderRadius: 50, }}
                source={fileUri ? { uri: fileUri } : // if clicked a new img
                require('../assets/dummy.png')} //else show random
                />
                <TouchableOpacity style={styles.addPictureIcon} onPress={
                chooseImage
                }>
                <Icon name="camera" size={20} />
                </TouchableOpacity>
                </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/user/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Name"
              underlineColorAndroid='transparent'
              onChangeText={(email) => onClickListener({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              underlineColorAndroid='transparent'
              onChangeText={(password) =>onClickListener({password})}/>
        </View>

        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/speech-bubble/ultraviolet/50'}}/>
          <TextInput style={[ styles.messageInput]}
              placeholder="Message"
              underlineColorAndroid='transparent'
              onChangeText={(password) => onClickListener({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => onClickListener()}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableHighlight>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  logo:{
    width:120,
    height:120,
    justifyContent: 'center',
    marginBottom:20,
  },
  addPictureIcon: {
    height: 30,
    width: 30,
    backgroundColor: 'white',
    borderRadius: 50,
    position: 'absolute',
    left: 65,
    top: 75,
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  sendButton: {
    backgroundColor: "#FF4500",
  },
  buttonText: {
    color: 'white',
  }
}); 