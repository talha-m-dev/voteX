import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
]


export default function Verify_PO() {
    return (
        <View>
            {
                list.map((item, i) => (
                <ListItem
                    key={i}
                    title={item.title}
                    rightIcon={{ name: item.icon }}
                    bottomDivider
                    chevron
                />
                ))
            }
            </View>
    )
}

const styles = StyleSheet.create({})
