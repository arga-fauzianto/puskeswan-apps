import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { IconBacklight } from '../../../assets'
import { colors, fonts } from '../../../utils'

const HeaderProfile = ({ onPress, title, desc, photo }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <IconBacklight />
        </TouchableOpacity>
        <View style={styles.content}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
        <Image source={photo} style={styles.avatar}/>
    </View>
  )
}

export default HeaderProfile

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 15,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    content: {
        flex: 1,
    },
    avatar: {
        width: 56,
        marginRight: 20,
        height: 56,
        borderRadius: 56 / 2
    },
    name: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        marginTop: 2,
        textAlign: 'center',
        color:colors.text.subTitle,
    }
})