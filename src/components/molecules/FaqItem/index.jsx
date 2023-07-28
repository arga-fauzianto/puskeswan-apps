import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { IconFaq } from '../../../assets'
import { colors, fonts } from '../../../utils'

const FaqItem = ({ title }) => {
  return (
   <SafeAreaView style ={styles.content}>
     <View style= {styles.areacontent}>
        <View style ={styles.wrapIc}>
            <IconFaq />
        </View>
        <Text style ={styles.textFaq}>{title}</Text>
     </View>
   </SafeAreaView>
  )
}

export default FaqItem

const styles = StyleSheet.create({
    wrapIc: {
        backgroundColor: colors.secondary,
        width: 38,
        height: 38,
        borderRadius: 5,
        padding: 6,
        justifyContent: "center",
        alignContent: "center"
    },

    areacontent: {
        flexDirection: "row",
        paddingTop: 16,
        paddingBottom: 16,
        backgroundColor: colors.grow,
        borderWidth: 1,
        borderColor: colors.tertiary,
        paddingHorizontal: 6,
        alignItems: "center",
        borderRadius: 4,
        marginVertical: 5
    },

    textFaq: {
        fontFamily: fonts.primary[400],
        fontSize: 14,
        color: colors.text.primary,
        left: 12
    },

    content: {
        flex: 1
    }

})