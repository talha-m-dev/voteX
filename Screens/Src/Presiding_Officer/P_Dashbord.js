import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function P_Dashbord ({navigation}) {

    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.headerContent} onPress={()=>navigation.navigate('P_Profile_Edit')}>
                <Image style={styles.avatar}
                  source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}}/>

                <Text style={styles.name}>
                  Talha Manzoor
                </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>

              <TouchableOpacity style={styles.menuBox} onPress={()=>navigation.navigate('Verify_C')} >
                <Image style={styles.icon} source={require('./assets/1.png')}/>
                <Text style={styles.info}>Verify Candidate</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuBox} onPress={()=>navigation.navigate('All_C')}>
                <Image style={styles.icon} source={require('./assets/2.png')}/>
                <Text style={styles.info}>All Candidates</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuBox} onPress={()=>navigation.navigate("P_Chats")}>
                <Image style={styles.icon} source={require('./assets/3.png')}/>
                <Text style={styles.info}>Chats</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuBox} onPress={()=>navigation.navigate('Verify_VO')}>
                <Image style={styles.icon} source={require('./assets/4.png')}/>
                <Text style={styles.info}>Verify Voters</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuBox} onPress={()=>navigation.navigate('All_VO')}>
                <Image style={styles.icon} source={require('./assets/5.png')}/>
                <Text style={styles.info}>All Voters</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuBox} onPress={()=>navigation.navigate('P_Profile')}>
                <Image style={styles.icon} source={require('./assets/6.png')}/>
                <Text style={styles.info}>Profile</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.menuBox} onPress={()=>navigation.navigate('P_Log_Out')}>
                <Image style={styles.icon} source={require('./assets/7.png')}/>
                <Text style={styles.info}>Log Out</Text>
              </TouchableOpacity>

              



            </View>
        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
  header:{
    backgroundColor: "#4BA3C3",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#696969",
  },
  bodyContent:{
    paddingTop:40,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  icon: {
    width:60,
    height:60,
  },
  info:{
    fontSize:12,
    color: "#696969",
  }
});
  