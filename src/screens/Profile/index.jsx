import {TouchableOpacity, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { EditProfile, Header, ListEditProfile } from '../../components/molecules'
import { colors, fonts } from '../../utils'
import { Button, Gap } from '../../components/atoms'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title= "Profile "/>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.contents}>
        <EditProfile />
        <View style={styles.wrapList}>
          <ListEditProfile title="Edit Profile" icon='edit-profile'/>
          <ListEditProfile title="Hewan Ternak" icon='pet'/>
          <ListEditProfile title="FaQ" icon='faq'/>
        </View>
      </ScrollView>
      <TouchableOpacity activeOpacity={0.6} style={styles.btnOut}>
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