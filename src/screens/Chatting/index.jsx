import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ChatItem, Header, InputChat } from '../../components/molecules'
import { DummyDoctor } from '../../assets'
import { colors, fonts } from '../../utils'
import { Button } from '../../components/atoms'

const Chatting = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header 
      type='profile' 
      photo={DummyDoctor} 
      title="Arga Fauzianto" 
      desc="Hewan Peliharaan" 
      onPress={() => navigation.goBack()}
      />
       <View style = {styles.content}>
        <Text style={styles.dateChat}>kamis, 03, maret, 2023</Text>
        <ChatItem isMe />
        <ChatItem />
       </View>  
      <InputChat 
       value="2"
      //  onChangeText={() => alert('Hallo')}
      //  onButtonPress={() => alert('bissaa gan')}
      />
    </View>
  )
}

export default Chatting

const styles = StyleSheet.create({
  dateChat: {
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginVertical: 15,
    textAlign: "center"
  },
  page: {
    backgroundColor: colors.grow,
    flex: 1
  },

  content: {
    flex: 1,

  }
})