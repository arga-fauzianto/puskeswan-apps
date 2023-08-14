import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { DummyDoctor, IcNext } from '../../../assets'

const ListDoctor = ({ profile, name, desc, type, onPress }) => {
  return (
    <TouchableOpacity style = {styles.container} onPress={onPress}>
        <Image source={profile} style={styles.avatar}/>
        <View style={styles.wrapperContent}>
         <Text style = {styles.nameDoctor}>{name}</Text>
         <Text style = {styles.desc}>{desc}</Text>
        </View  >
            {
                type === 'next' && <IcNext />
            }
    </TouchableOpacity>
  )
}

export default ListDoctor

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 16,
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },

    avatar: {
        width: 52,
        height: 52,
        borderRadius: 46 / 2,
        marginRight: 12,
    },

    nameDoctor: {
        fontFamily: fonts.primary[300],
        fontSize: 16,
        color: colors.text.primary
    },

    desc: {
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
        fontSize: 12
    },

    wrapperContent: {
        flex: 1
    }
})