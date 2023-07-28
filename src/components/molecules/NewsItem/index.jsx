import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DummyCard } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Gap } from '../../atoms'

const NewsItem = ({ onPress }) => {
  return (
    <TouchableOpacity style = {styles.card} activeOpacity={0.7} onPress={onPress}>
        <Image source={DummyCard} style = {styles.image}/>
        <Gap height={10} />
      <Text style = {styles.title}>Kamu Mau Strelisasi ?</Text>
      <Text style ={styles.desc}>Sebelum melakukan Sterilisasi untuk kucing kesayangan kamu. Perhatikan tips n triks perawatannya ya...</Text>
    </TouchableOpacity>
  )
}

export default NewsItem

const styles = StyleSheet.create({

    image : {
        width: 200,
        height: 80,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },

    card: {
        width: 200,
        height: 190,
        backgroundColor: colors.grow,
        elevation: 3,
        alignSelf: 'flex-start',
        borderRadius: 9,
        marginRight: 24,
    },

    title: {
      fontFamily: fonts.primary[400],
      color: colors.text.primary,
      marginLeft: 5,
      fontSize: 14
    },

    desc: {
      fontFamily: fonts.primary[200],
      color: colors.text.secondary,
      fontSize: 9,
      maxWidth: 200,
      left: 7
     
    }
})