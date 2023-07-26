import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ILLNullPhoto, IcBack, IconAddPhoto } from '../../assets'
import { Header } from '../../components/molecules'
import Button from '../../components/atoms/Button'
import { Gap, Link } from '../../components/atoms'


const Uploud = () => {
  return (
    <View style={styles.page}>
      <Header title="Uploud Photo"/>
      <View style = {styles.content}>
        <View style = {styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILLNullPhoto} style = {styles.avatar}/>
            <IconAddPhoto style = {styles.addPhoto}/>
          </View>
            <Text style = {styles.headerText}>Fatur Swastya</Text>
            <Text style = {styles.jobsText}>Product Designer</Text>
        </View>
      <View>
        <Button title="Uploud and Continue" />
        <Gap height={30}/>
        <Link title="Skip for this" align="center" size={16}/>
      </View>
      </View>
    </View>
  )
}

export default Uploud

const styles = StyleSheet.create({

  avatar: {
    width: 110,
    height: 110 
  },

  profile: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
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

  page: {
    flex: 1,
  },

  content: {
    marginTop: 10,
    paddingHorizontal: 40,
    flex: 1,
    backgroundColor: colors.grow,
    justifyContent: "space-between",
    paddingBottom: 65

  },

  addPhoto: {
    position: "absolute",
    bottom: 8,
    right: 6
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
  }
  
})