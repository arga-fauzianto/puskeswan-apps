import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

const Loading = () => {
  return (
    <View style ={ styles.wrapper }>
        <ActivityIndicator size="large" color={colors.secondary} />
      <Text style = {styles.loadText}>Harap Menunggu ....</Text>
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.loadingBackground,
        width: '100%',
        height: '100%'
    },

    loadText: {
        fontSize: 18,
        color: colors.secondary,
        fontFamily: fonts.primary[300],
        marginTop: 18
    }
})