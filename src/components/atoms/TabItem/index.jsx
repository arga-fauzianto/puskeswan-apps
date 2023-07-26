import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconHome, IconHomeActive, IconMessage, IconMessageActive, IconProfile, IconProfileActive } from '../../../assets'
import { colors, fonts } from '../../../utils'


const TabItem = ({ title, active, onLongPress, onPress }) => {

  const Icon = () => {
    if (title === "Home") {
      return active ? <IconHomeActive /> : <IconHome />;
    }

    if (title === "Messages") {
      return active ? <IconMessageActive /> : <IconMessage />;
    }

    if (title === "Profile") {
      return active ? <IconProfileActive /> :  <IconProfile />;
    }

    return <IconHome />;
  }

  return (
    <View style= {styles.content(active)}>
    <TouchableOpacity style = {styles.container} onLongPress={onLongPress} onPress={onPress}>
      <Icon />
      <Text style= {styles.text(active)}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: 'space-between'
  },

  content: (active) => ({
    borderRadius: 7,
    padding: 14,
    alignItems: 'center',
    backgroundColor: active ? colors.secondary : null
  }),

  text: (active) => ({
    fontSize: 12,
    marginTop: 4, 
    fontFamily: fonts.primary[300],
    color: active ? colors.text.menuActive : colors.text.menuInActive 
  })

})