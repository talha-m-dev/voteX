import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function E_Dashbord() {
    return (
        <View style={styles.main}>
            <LinearGradient colors={['#3A1C71', '#D76D77', '#FFAF7B']} style={styles.linearGradient}>
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
                    <TouchableOpacity style={styles.card}>
                    
                       <Icon style={styles.icon} name="pencil" size={30} color="#457b9d" />
                    
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
    },
    avt:{
        alignSelf:"center",
        margin:50,
    },
    bord:{
        
        flexDirection:"row",
        alignContent:'center',
        justifyContent:'space-around',
        flexWrap:'wrap',
        margin:25,
    },
    card:{
        
        borderWidth:5,
        margin:7,
        backgroundColor:'#a8dadc',
        borderColor:'#3A1C71',

    },
    icon:{
        padding:30,
    },
})
