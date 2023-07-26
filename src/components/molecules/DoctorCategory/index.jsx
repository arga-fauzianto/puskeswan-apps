import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILCatPets } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

const DoctorCategory = ({ title }) => {
  return (
    <View style ={styles.container}>
      <View style = {styles.cardPets}>
        <ILCatPets />
      </View>
      <Gap height={6}/>
      <Text style = {styles.text}>{title}</Text>
    </View>
  )
}

export default DoctorCategory

const styles = StyleSheet.create({
  cardPets: {
    padding: 12,
    backgroundColor: colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 8
  },

  container: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    alignSelf: "flex-start",
    flex: 1
  
  },

  text: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    textAlign: "center",
    color: colors.text.primary
   
  }
})