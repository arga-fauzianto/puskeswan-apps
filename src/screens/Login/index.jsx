import { TouchableOpacity, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { IcLogin } from '../../assets'
import { Gap, Input, Link } from '../../components/atoms'

const Login = ({ navigation }) => {

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.ContentMain}>
        <View style = {styles.wrapText}>
          <Text style = {styles.textHeader}>
            Welcome Back, 
          </Text>
          <Text style = {styles.textDesc}>
            login now to continue 
          </Text>
        </View>
        <View style = {styles.wrapLogo}>
          <IcLogin />
        </View>
        <Gap height={24} />
        <KeyboardAvoidingView>
           <Input label="Email Address" placeholder="Email address"/>
           <Gap height= {24} /> 
          <Input label="password" placeholder= "Input Password"/> 
          <Gap height={10} />
          <Link title="Forgot My Password" align="right" />
        </KeyboardAvoidingView>
        <Gap height={24} />
      <View style = {styles.wrapBtn}>
        <TouchableOpacity style = {styles.btn} activeOpacity={0.6}>
            <Text style = {styles.textBtn}>
                Login
            </Text>
        </TouchableOpacity>
        <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate("")}/>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default Login

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
    backgroundColor: colors.secondary,
    borderRadius: 8,
    width: 280,
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