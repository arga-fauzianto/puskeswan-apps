import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcBack, IconBackDark } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Button from '../../atoms/Button'

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style = {styles.textUploud}>{title}</Text>   
    </View>
  )
}

export default Header

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20
  },

  textUploud: {
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
    flex: 1,
    textAlign: "center",
    fontSize: 20
  }

})