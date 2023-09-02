import {TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILArticle, ILCatObat, ILCatPets, ILCatTernak } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

const DoctorCategory = ({ category, onPress }) => {
  const Icon = () => {
    if(category === "pets") {
      return <ILCatPets />
    }

    if(category === "hewan ternak") {
      return <ILCatTernak />
    }

    if(category === "obat") {
      return <ILCatObat />
    }

    if(category === "article") {
      return <ILArticle />
    }

    return <ILCatPets />
  }
  return (
    <TouchableOpacity style ={styles.container} onPress={onPress}>
      <View style = {styles.cardPets}>
        <Icon /> 
      </View>
      <Gap height={6}/>
      <Text style = {styles.text}>{category}</Text>
    </TouchableOpacity>
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