import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EditProfile, Header } from '../../components/molecules'

const Profile = () => {
  return (
    <View>
      <Header title= "Profile "/>
      <ScrollView>
        <EditProfile />
        <Text>Profile</Text>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})