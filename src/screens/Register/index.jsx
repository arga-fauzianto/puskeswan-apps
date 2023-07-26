import { TouchableOpacity, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ILRegister, IcBack, IcLogin } from '../../assets'
import { Gap, Input, Link } from '../../components/atoms'
import { ScrollView } from 'react-native-gesture-handler'
import { Image } from 'react-native-svg'

const Register = ({ navigation }) => {

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView scrollIndicatorInsets={false} showsVerticalScrollIndicator= {false} >      
      <View style = {styles.ContentMain}>
        <View style = {styles.wrapText}>
          <Text style = {styles.textHeader}>
            Create account, 
          </Text>
          <Text style = {styles.textDesc}>
            create account now to continue 
          </Text>
        </View>
        <View style = {styles.wrapLogo}>
          <ILRegister />
        </View>
        <Gap height={24} />
        <KeyboardAvoidingView>
           <Input label="Username" placeholder="Input Your Username" autoCapitalize="none" />
           <Gap height= {10} /> 
          <Input label="Email Address" placeholder= "Input Your Email Address"/> 
          <Gap height={10} />
          <Input label="Password" placeholder= "Input Your Password"/>
        </KeyboardAvoidingView>
        <Gap height={24} />
      <View style = {styles.wrapBtn}>
        <TouchableOpacity style = {styles.btn} activeOpacity={0.6} onPress={() => navigation.navigate("Uploud")}>
            <Text style = {styles.textBtn}>
               Continue
            </Text>
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF",
    alignContent: 'center'
  },
  
  ContentMain: {
    flex: 1,
    padding: 20,
  },

  wrapText: {
    padding: 10,
  },

  textHeader: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: "#0A0A0A",
    lineHeight: 50
  },

  textDesc: {
    fontFamily: fonts.primary[300],
    color: "#6C757D",
    fontSize: 16
  },
  
  wrapLogo: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24
  },

  btn: {
    backgroundColor: colors.foutery,
    borderRadius: 8,
    width: 350,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
},

textBtn: {
    fontFamily: fonts.primary[400],
    color: colors.grow,
    fontSize: 17,
},

wrapBtn: {
  justifyContent: 'space-between',
  alignItems: "center"
},

})