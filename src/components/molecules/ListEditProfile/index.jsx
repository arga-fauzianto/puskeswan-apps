import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { ILArticle, ILCatObat, ILCatPets, IcNext, IconEditProfile, IconFaq, IconMessage } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListEditProfile = ({ title, icon }) => {

    const Icon = () => {
        if (icon === 'edit-profile') {
            return <IconEditProfile />
        }

        if (icon === 'pet') {
            return <ILCatPets />
        }

        if (icon === 'faq') {
            return <IconFaq />
        }

        return <IconEditProfile />
    }

  return (
    <SafeAreaView style ={styles.content}>
     <View style= {styles.areacontent}>
        <View style ={styles.wrapIc}>
            <Icon />
        </View>
        <Text style ={styles.textFaq}>{title}</Text>
     </View>
   </SafeAreaView>

  )
}

export default ListEditProfile

const styles = StyleSheet.create({

    wrapIc: {
        backgroundColor: colors.secondary,
        width: 38,
        height: 38,
        borderRadius: 5,
        padding: 6,
        justifyContent: "center",
        alignContent: "center",
        marginLeft: 10
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
        left: 18
    },

    content: {
        flex: 1
    }
})