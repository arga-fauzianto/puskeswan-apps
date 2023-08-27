import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { DummyUser } from '../../../assets'
import { colors, fonts } from '../../../utils'

const EditProfile = () => {
  return (
    <SafeAreaView>
    <View style = {styles.container}>
        <View style={styles.wrapAvatar}>
          <Image source={DummyUser} style = {styles.avatar}/>
        </View>
      <View style = {styles.wraptext}>
       <Text style = {styles.name}>Fatur Swastyani</Text>
       <Text style = {styles.jobs}>faturswastyani@gmail.com</Text>
      </View>
    </View>
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: colors.primary,
        borderRadius: 10,
        padding: 16,
        margin: 14,
        flex: 1,
        height: 120
      },
      avatar: {
        width: 62,
        height: 62,
        borderRadius: 10 / 2,
      },
      name: {
        fontSize: 18,
        fontFamily: fonts.primary[400],
        color: colors.text.primary,
        textTransform: 'capitalize'
      },
    
      jobs: {
        fontSize: 14,
        fontFamily: fonts.primary[300],
        color: colors.text.primary,
        textTransform: 'capitalize'
      },
    
      wraptext: {
        marginTop: 20,
        marginLeft: 20
      },

      wrapAvatar: {
        marginLeft: 13,
        marginTop: 15
      }
})