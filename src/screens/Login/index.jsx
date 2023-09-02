import {ScrollView,  TouchableOpacity, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { colors, fonts, storeData, useForm } from '../../utils'
import { IcLogin } from '../../assets'
import { Gap, Input, Link } from '../../components/atoms'
import { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth'
import { showMessage } from 'react-native-flash-message'
import { Loading } from '../../components/molecules'
import {useDispatch} from 'react-redux'

const Login = ({ navigation }) => {

  const [form, setForm] = useForm({email: '', password: ''})

  const dispatch = useDispatch()

// pengambilan fungsi login dan ambil data dari local storage

  const login = () => {
   dispatch({type: 'SET_LOADING', value: true})
   auth().signInWithEmailAndPassword(form.email, form.password)
   .then(success => {
    console.log('login', success)
    setForm('reset')
    dispatch({type: 'SET_LOADING', value: true})

    firebase.database().ref(`users/${success.user.uid}/`).once('value')
    .then(resDB => {
      if(resDB.val()) {
        storeData('user', resDB.val())

        showMessage({
          message: 'Kamu berhasil login',
          type: 'defaul',
          backgroundColor: colors.sixtiary,
          color: colors.grow
        })

        navigation.replace('MainApp')
      }
      
    })
   })
   .catch(err => {
    dispatch({type: 'SET_LOADING', value: false})
    showMessage({
      message: err.message,
      type: 'default',
      backgroundColor: colors.fivetery,
      color: colors.grow
    })
   })
  }

  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
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
            <Input label="Email Address" 
            placeholder="Email address" 
            value={form.email} 
            onChangeText={value => setForm('email', value)}
            />
            <Gap height= {24} /> 
            <Input label="password" 
            placeholder= "Input Password" 
            value={form.password} 
            onChangeText={value => setForm('password', value)}/> 
            <Gap height={10} />
            <Link title="Forgot My Password" align="right" />
          </KeyboardAvoidingView>
          <Gap height={24} />
        <View style = {styles.wrapBtn}>
          <TouchableOpacity style = {styles.btn} activeOpacity={0.6} onPress={login}>
              <Text style = {styles.textBtn}>
                  Login
              </Text>
          </TouchableOpacity>
          <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate('Register')}/>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: "#FFFFFF",
    alignContent: 'center',

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