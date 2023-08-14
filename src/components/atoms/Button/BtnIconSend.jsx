import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({ disable }) => {
  return (
    <View style = {styles.container(disable)}>
      {disable && <IconSendDark />}
      {!disable && <IconSendLight />}
    </View>
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