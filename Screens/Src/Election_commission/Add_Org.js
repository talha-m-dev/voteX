import React ,{useState ,useContext} from 'react';
import {StyleSheet, Image, View, Text,TouchableOpacity} from 'react-native';
import { Kaede } from 'react-native-textinput-effects';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Overlay} from 'react-native-elements';
import DatePicker from 'react-native-date-picker'
import {Context as Auth} from '../../Context/AuthContext';

export default function Add_Org({navigation}) {
  const {state,addorg} = useContext(Auth)
  const [oname, setonmae] = useState('');
  const [opost, setopost] = useState('');
  const [oaddress, setoaddress] = useState('');
  const [odiscreption, setodiscreption] = useState('')
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
  const [ovotetime, setDate] = useState(new Date());
  const [overlay, setoverlay] = useState(false)

 
  return (
    <View style={styles.container}>
      <View style={{
    alignSelf: 'center',
    marginTop: 35,
    }}>
      <Overlay isVisible={overlay} >
      <View>
      <DatePicker
      date={ovotetime}
      style={{height:140,width:240}}
      onDateChange={setDate}
      
    />
    <TouchableOpacity onPress={()=>setoverlay(false)}>
      <Text>okay</Text>
    </TouchableOpacity>
      </View>
    
    </Overlay>
    <Image
    style={{ height: 100, width: 150, borderRadius: 2, }}
    source={fileUri ? { uri: fileUri } : require('../assets/dum.jpg')}
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
    onChangeText={(text) => { setonmae(text) }}
      />
      <Kaede
        label={'Candidate Post'}
        inputPadding={16}
        onChangeText={(text) => { setopost(text) }}
      />
      <Kaede
        label={'Adress'}
        inputPadding={16}
        onChangeText={(text) => { setoaddress(text) }}
      />
      
      
      <Kaede
        label={'Description'}
        inputPadding={16}
        onChangeText={(text) => { setodiscreption(text) }}
      />
    </View>
    
    <View style={styles.btn_con}>
    <Button
          buttonStyle={styles.btn}
          icon={<Icon name="check" size={25} color="black" />}
          title=" Voting Time  "
          type="outline"
          iconRight={true}
          onPress={() => {
            setoverlay(true);
          }}
        />
    
    <Button
          buttonStyle={styles.btn}
          icon={<Icon name="check" size={25} color="black" />}
          title=" ADD Orgnization   "
          type="outline"
          iconRight={true}
          onPress={() => {
            
            
            navigation.navigate('E_Dashbord')
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
      justifyContent: 'space-between',
    },
    btn: {
      marginTop:10,
      paddingVertical: 25,
      
      backgroundColor:'#fff',
    },
});
