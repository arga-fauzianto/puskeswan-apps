import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import Button from '../../atoms/Button'
import { Gap } from '../../atoms'

const InputChat = ({ value, onChangeText, onButtonPress }) => {
  return (
    <View style = {styles.page}>
      <TextInput 
       style={styles.input} 
       placeholder='tulis pesan'
       multiline
       value={value}
       onChangeText={onChangeText}
      />
      <Button type='btn-icon-send' disable={value.length < 1} onPress={onButtonPress}/>
    </View>
  )
}

export default InputChat

const styles = StyleSheet.create({
    input: {
      backgroundColor: '#EDEEF0',
      padding: 15,
      borderRadius: 12,
      flex: 1,
      marginRight: 10,
      fontSize: 14,
      maxHeight: 70,
      fontFamily: fonts.primary[200],
    },

    page: {
      padding: 16,
      flexDirection: "row",
      
    }
})