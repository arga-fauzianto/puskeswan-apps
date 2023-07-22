import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = ({  title, type }) => {
  return (
    <View style={styles.container(type)}>
            <Button type="icon-only" icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress}/>
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24} />
        </View>
  )
}

export default Header

const styles = StyleSheet.create({})