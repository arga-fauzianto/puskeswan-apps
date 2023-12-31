import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({ disable, onPress }) => {
    if(disable) {
    return (
      <View style = {styles.container(disable)}>
        <IconSendDark />
      </View>
      )
    }
    return (
      <TouchableOpacity style = {styles.container(disable)} onPress={onPress}>
        <IconSendLight />
      </TouchableOpacity>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? "#F1F1F7" : null,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 4,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,

  })
})