import {TouchableOpacity, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { EditProfile, Header, ListEditProfile } from '../../components/molecules'
import { colors, fonts, getData } from '../../utils'
import { Button, Gap } from '../../components/atoms'
import { DummyUser } from '../../assets'
import auth from '@react-native-firebase/auth'
import { showMessage } from 'react-native-flash-message'

const Profile = ({ navigation }) => {
  const [profile, setprofile] = useState({
    userName: '',
    email: '',
    photo: DummyUser,
  })

  useEffect(() => {
    getData('user').then(res => {
      const data =res;
      data.photo = {uri: res.photo}
      setprofile(data);
    })
  }, [])

  const getSignOut = () => {
    auth().signOut().then(res => {
      console.log('logout success: ', res)
      navigation.replace('Login')
    })
    .catch(err => {
      showMessage({
        message: err.message,
        type: 'default',
        backgroundColor: colors.fivetery,
        color: "#FFFFFF"
      })
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title= "Profile "/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.contents}>
        {profile.userName.length > 0 && (
          <EditProfile name={profile.userName} desc={profile.email} photo={profile.photo}/>
        )}
        <View style={styles.wrapList}>
          <ListEditProfile title="Edit Profile" icon='edit-profile' onPress={() => navigation.navigate('UpdatedProfile')}/>
          <ListEditProfile title="Hewan Ternak" icon='pet'/>
          <ListEditProfile title="FaQ" icon='faq'/>
        </View>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.6} style={styles.btnOut} onPress={getSignOut}>
        <Text style={styles.textOut}>Keluar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F6F6",
    flex: 1
  },

  wrapList: {
    marginTop: 16,
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
  },

  contents: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  btnOut: {
    backgroundColor: colors.fivetery,
    margin: 18,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  textOut: {
    fontFamily: fonts.primary[300],
    color: "#FFFFFF",
    fontSize: 16,
  }
})