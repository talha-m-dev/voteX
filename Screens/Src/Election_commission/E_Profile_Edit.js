import React, {useState} from 'react'
import { StyleSheet, Image, TouchableOpacity,View } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


export default function E_Profile_Edit() {
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
        <View style={{backgroundColor:'#4BA3C3',flex:1}}>
            <View style={{
                alignSelf: 'center',
                marginTop: 35,
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
                <Sae
                    label={'Email Address'}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    value={'My Name'}
                />
                <Sae
                    label={'Email Address'}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                <Sae
                    label={'Email Address'}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                <Sae
                    label={'Email Address'}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
                <Sae
                    label={'Email Address'}
                    iconClass={FontAwesomeIcon}
                    iconName={'pencil'}
                    iconColor={'white'}
                    inputPadding={16}
                    labelHeight={24}
                    // active border height
                    borderHeight={2}
                    // TextInput props
                    autoCapitalize={'none'}
                    autoCorrect={false}
                />
  
                
            
        </View>
    )
}

const styles = StyleSheet.create({
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
        }
})
