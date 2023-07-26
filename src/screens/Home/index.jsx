import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { DoctorCategory } from '../../components/molecules'
import { colors, fonts } from '../../utils'
import { HomeProfile } from '../../components/molecules'
import { Gap } from '../../components/atoms'

const Home = () => {
  return (
    <View style = {styles.page}>
      <HomeProfile />
      <Text style ={styles.welcome}>Mau Konsultasi Peliharan kamu Dengan Siapa ?</Text>
      <Gap height={12} />
      <View style ={styles.category}>
       <DoctorCategory title= "Pets"/>
       <DoctorCategory title= "Hewan ternak"/>
       <DoctorCategory title= "Obat"/>
       <DoctorCategory title= "Article"/>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    flex: 1,
    paddingVertical: 30,
    backgroundColor: colors.grow
  },

  welcome: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 18,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 309

  },

  profileWrap: {
    borderRadius: 10,
    backgroundColor: colors.primary
  },

  category: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  }
})
