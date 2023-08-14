import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { DummyDoctor, IcBack, IconBackDark } from '../../../assets'
import { colors, fonts } from '../../../utils'
import Button from '../../atoms/Button'
import HeaderProfile from './HeaderProfile'

const Header = ({ title, onPress, type,  photo, desc }) => {

  if (type === 'profile') {
    return <HeaderProfile onPress={onPress} title={title} desc={desc} photo={photo}/>
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <IconBackDark />
      </TouchableOpacity>
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