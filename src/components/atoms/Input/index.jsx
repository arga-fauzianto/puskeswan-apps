import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput } from 'react-native'
import React, { useState }  from 'react'
import { colors, fonts } from '../../../utils'

const Input = ({ label, value, onChangeText, secureTextEntry, disable, placeholder }) => {
    const [border, setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.secondary)
      };
    const onBlurForm = () => {
        setBorder(colors.border)
      }

  return (
    <View>
    <KeyboardAvoidingView>
        <Text style={styles.label}>{label}</Text>
        <TextInput 
        onFocus={onFocusForm} 
        onBlur={onBlurForm} 
        style={styles.input(border)}
        onChangeText={onChangeText}
        value={value}
        editable={!disable}
        selectTextOnFocus={!disable}
        secureTextEntry={secureTextEntry}
        placeholder= {placeholder}
        />
    </KeyboardAvoidingView>
</View>
  )
}

export default Input

const styles = StyleSheet.create({
  input: (border) => ({
    borderWidth: 1,
    borderColor: border,
    borderRadius: 10,
    padding: 12,
}),

label: {
  fontSize: 16,
  color: colors.text.seccondary,
  marginBottom: 6,
  fontFamily: fonts.primary[400],
}
})