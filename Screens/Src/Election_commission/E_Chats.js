import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'

const list = [
  {
    id:1,
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    id:5,
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export default function E_Chats({navigation}) {
    return (
        <View>
            {
            list.map((l, i) => (
            <ListItem
                key={i}
                leftAvatar={{ source: { uri: l.avatar_url } }}
                title={l.name}
                subtitle={l.subtitle}
                bottomDivider
                badge={{ value: l.id, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
                onPress={()=>{navigation.navigate('E_messages',{l})}}
            />
            ))
        }
        </View>
    )
}

const styles = StyleSheet.create({})
