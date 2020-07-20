/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, {useState}from 'react';
import {StyleSheet,TouchableOpacity,Text, Dimensions,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar,Divider,Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';




const {width} = Dimensions.get('window');
export default function E_Dashbord({navigation}) {
  // const [overly, setOverly] = useState(true);
  return (
    <View  style={styles.container}>
      {/* {console.log(overly)} */}
    {/* <Overlay
    isVisible={overly}
    windowBackgroundColor="rgba(255, 255, 255, .5)"
    overlayBackgroundColor="red"
    width="auto"
    height="auto"
    onBackdropPress={() => setOverly(false)}

  >
    <Text>Hello from Overlay!</Text>
  </Overlay> */}
    <View >
       <LinearGradient
       start={{x: 0.0, y: 0.0}} end={{x: 0.2, y: 0.5}}
       locations={[1,0]}
       colors={['#4BA3C3',  '#FFF']}
        > 
        {/*   <View style={styles.lngrd}>*/}
        <Avatar
          containerStyle={styles.avt}
          showEditButton={true}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
          size="xlarge"
          rounded
        />
        <View
          style={{
            margin:10,
          borderLeftWidth: 1,
          borderLeftColor: 'red',
          }}
        />
          <View style={{flexDirection:'row',justifyContent:'space-around', }}>
          <Text style={styles.text}>58</Text>
          <Divider style={{ backgroundColor: '#4BA3C3',height:50,width:1 }} />
          <Text style={styles.text}>58</Text>
        <Divider style={{ backgroundColor: '#4BA3C3',height:50,width:1 }} />
        <Text style={styles.text}>58</Text>
          </View>
        
        <Divider style={{ backgroundColor: '#4BA3C3',marginTop:10,  height:1}} />

      </LinearGradient> 
      {/* </View> */}
      <View style={styles.main}>
        <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('Add_org')}>
          <Icon name="plus" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="list-alt" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="check-square-o" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="id-badge" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="comments" size={30} color="#900" />
        </TouchableOpacity>
        
      </View>
 
    </View>
  
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lngrd:{
    borderRightWidth: width,
    borderRightColor: 'red',
    borderTopWidth: width,
    borderTopColor: 'green',
    position: 'absolute',
    opacity: 0.5,
  },
  avt: {
    alignSelf: 'center',
    margin: 50,
  },
  main: {
    flex: 1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginTop:50,
  },
  card: {
    borderWidth: 1,
    padding:35,
    
    margin:10,
    backgroundColor: '#4BA3C3',
    borderColor: '#3A1C71',
  },
  text:{
    fontSize:30,
    margin:10,
  },
});
