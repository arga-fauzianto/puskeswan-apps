import { StyleSheet, Text, Image,  View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DummyUser, ILLNullPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'

const HomeProfile = () => {
  const [profile, setProfile] = useState({
    photo: ILLNullPhoto,
      userName: '',
      profession: ''
  });

  useEffect(() => {
    getData('user').then(res => {
      const data = res;
      data.photo = {uri: res.photo}
      console.log('new ress', data)
      setProfile(res);
    })
  }, [])

  return (
    <View style = {styles.container}>
      <Image source={profile.photo} style = {styles.avatar}/>
      <View style = {styles.wraptext}>
       <Text style = {styles.name}>{profile.userName}</Text>
       <Text style = {styles.jobs}>{profile.profession}</Text>
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
    maxWidth: 209,
    textTransform: 'capitalize'
  },

  jobs: {
    fontSize: 18,
    fontFamily: fonts.primary[300],
    color: colors.text.primary,
    textTransform: 'capitalize'
  },

  wraptext: {
    paddingHorizontal: 12
  }
})