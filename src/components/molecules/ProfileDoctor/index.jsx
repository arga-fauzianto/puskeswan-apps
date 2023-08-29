import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const ProfileDoctor = ({ name, desc, photo }) => {
  return (
    <View style = {styles.profile}>
    <View style={styles.avatarWrapper} >
      <Image source={photo} style = {styles.avatar}/>
    </View>
      <Text style = {styles.headerText}>{name}</Text>
      <Text style = {styles.jobsText}>{desc}</Text>
  </View>
  )
}

export default ProfileDoctor

const styles = StyleSheet.create({
    profile: {
        alignItems: 'center',
        marginTop: 40,
      },
    
      avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderRadius: 130 / 2,
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.border
      },

      avatar: {
        width: 110,
        height: 110,
        borderRadius: 130 / 2 
      },

      headerText: {
        fontSize: 24,
        fontFamily: fonts.primary[400],
        textAlign: 'center'
      },
    
      jobsText: {
        fontSize: 18,
        fontFamily: fonts.primary[300],
        textAlign: "center",
        marginTop: 4,
        color: colors.tertiary
      },
})