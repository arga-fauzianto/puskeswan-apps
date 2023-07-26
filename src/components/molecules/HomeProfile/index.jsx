import { StyleSheet, Text, Image,  View } from 'react-native'
import React from 'react'
import { DummyUser } from '../../../assets'
import { colors, fonts } from '../../../utils'

const HomeProfile = () => {
  return (
    <View style = {styles.container}>
      <Image source={DummyUser} style = {styles.avatar}/>
      <View style = {styles.wraptext}>
       <Text style = {styles.name}>Fathurachman Swastya I</Text>
       <Text style = {styles.jobs}>Design Grafis</Text>
      </View>
    </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 16
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 10 / 2,
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    maxWidth: 209
  },

  wraptext: {
    paddingHorizontal: 12
  }
})