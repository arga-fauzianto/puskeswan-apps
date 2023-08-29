import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const ItemProfileDoctor = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{ label }</Text>
      <Text style= {styles.descText}>{ value }</Text>
    </View>
  )
}

export default ItemProfileDoctor

const styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },

    headerText: {
        fontSize: 16,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginBottom: 8
    },

    descText: {
        fontSize: 14,
        fontFamily: fonts.primary[200],
        color: colors.text.primary
    }
})