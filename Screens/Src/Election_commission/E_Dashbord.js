/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React, {useState, useContext}from 'react';
import {StyleSheet,TouchableOpacity,Text, Dimensions,View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Avatar,Divider,Overlay} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Context as Auth} from '../../Context/AuthContext';



const {width} = Dimensions.get('window');
export default function E_Dashbord({navigation}) {
  // const [overly, setOverly] = useState(true);
  const {state} = useContext(Auth)
  return (
    <View  style={styles.container}>
      
    
       <LinearGradient style={styles.lngrd}
       start={{x: 0.0, y: 0.0}} end={{x: 0.2, y: 0.5}}
       locations={[1,0]}
       colors={['#4BA3C3',  '#FFF']}
        > 
        
        <Avatar
          containerStyle={styles.avt}
          showEditButton={true}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
          }}
          size="xlarge"
          rounded
          onPres={()=>navigation.naigate('E_Profile')}
        />
        <View
          style={{
            margin:2,
          borderLeftWidth: 1,
          borderLeftColor: 'red',
          }}
        />
        <Text style={styles.text,{alignSelf:"center",fontSize:30,marginBottom:20,}}>{state.e_user.username}</Text>
          <View style={{flexDirection:'row',justifyContent:'space-around', }}>
          <Text style={styles.text}>1{'\n'}<Text style={styles.subtext}>Orgnization</Text></Text>
          
          <Divider style={{ backgroundColor: '#4BA3C3',height:50,width:1 }} />
          <Text style={styles.text}>4{'\n'}<Text style={styles.subtext}>P.O</Text></Text>
        <Divider style={{ backgroundColor: '#4BA3C3',height:50,width:1 }} />
        <Text style={styles.text}>9{'\n'}<Text style={styles.subtext}>Candidtes</Text></Text>
        <Divider style={{ backgroundColor: '#4BA3C3',height:50,width:1 }} />
        <Text style={styles.text}>48{'\n'}<Text style={styles.subtext}>Voters</Text></Text>
          </View>
        
        <Divider style={{ backgroundColor: '#4BA3C3',marginTop:2,  height:1}} />

      </LinearGradient> 
     
      <View style={styles.main}>
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Add_Org')}}>
          <Icon name="plus" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('All_Org')}}>
          <Icon name="list-alt" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('Verify_PO')}}>
          <Icon name="check-square-o" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('E_Profile_Edit')}}>
          <Icon name="id-badge" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('E_Chats')}}>
          <Icon name="comments" size={30} color="#000" />
        </TouchableOpacity>
        
      </View>
 
  
  
    </View>);
}

const styles = StyleSheet.create({
  container: {
   flex:1,
  },
  subtext:{
    fontSize:15
  },
  lngrd:{
   flex:1
  },
  avt: {
    alignSelf: 'center',
    marginTop:30,
    marginBottom:15,
   
  },
  main: {
    paddingTop:30,
    flex:1,
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent: 'center',
    backgroundColor: '#FFF',
    
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
