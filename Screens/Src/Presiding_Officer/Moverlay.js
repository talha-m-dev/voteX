import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Overlay} from 'react-native-elements';

export default function Moverlay() {
    return (
        <Overlay isVisible={true} >
      
    <TouchableOpacity onPress={()=>setoverlay(false)}>
      <Text>Close Me</Text>
    </TouchableOpacity>
    
    
    </Overlay>
    )
}

const styles = StyleSheet.create({})
