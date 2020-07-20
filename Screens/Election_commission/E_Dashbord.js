/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet,TouchableOpacity, Dimensions,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar,Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


const {width} = Dimensions.get('window');
export default function E_Dashbord({navigation}) {
  return (
    <View style={styles.container}>
       <LinearGradient
       start={{x: 0.0, y: 0.0}} end={{x: 0.2, y: 0.5}}
       locations={[1,0]}
       colors={['#192f6a',  '#FFF']}
        > 
        {/*   <View style={styles.lngrd}>*/}
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
        <View
          style={{
            margin:10,
          borderLeftWidth: 1,
          borderLeftColor: 'red',
          }}
        />
          <View style={{flexDirection:'row',justifyContent:'center',}}>
          <Divider style={{ backgroundColor: 'blue',height:100,width:1, margin:10 }} />
        <Divider style={{ backgroundColor: 'blue',height:100,width:1, margin:10 }} />
        <Divider style={{ backgroundColor: 'blue',height:100,width:1, margin:10 }} />
          </View>
        
        <Divider style={{ backgroundColor: 'blue',marginTop:150, }} />

      </LinearGradient> 
      {/* </View> */}
      <View style={styles.main}>
        <TouchableOpacity style={styles.card}>
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
  );
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
  },
  card: {
    borderWidth: 1,
    padding:35,
    
    margin:10,
    backgroundColor: '#a8dadc',
    borderColor: '#3A1C71',
  },
});
