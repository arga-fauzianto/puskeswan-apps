import { TouchableOpacity, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { colors, fonts, getData, showerror, storeData, useForm } from '../../utils'
import { ILRegister } from '../../assets'
import { Gap, Input } from '../../components/atoms'
import auth from '@react-native-firebase/auth'
import { Loading } from '../../components/molecules'
import { firebase } from '@react-native-firebase/database';

const Register = ({ navigation }) => {
 
  const [form, setForm] = useForm({
    userName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false)

const onContinue = () => {
  setLoading(true)
    auth().createUserWithEmailAndPassword(form.email, form.password)
    .then((userCredentials) => {
      setForm('reset')
      const data = {
        userName: form.userName,
        profession: form.profession,
        email: form.email,
        uid: userCredentials.user.uid
      };

      firebase.database()
      .ref('users/' + userCredentials.user.uid + '/')
      .set(data)

      setLoading(false)
      const user = userCredentials.user;
      storeData('user', data);
      navigation.navigate('Uploud', data)
      console.log('User account created & signed in!', user);
    })
    .catch((err) => {
      setLoading(false)
      showerror(err.message)
      console.log('That email address is invalid!');
    })
}

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
           <Input 
           label="Username" 
           placeholder="Input Your Username" 
           autoCapitalize="none" 
           value={form.userName}
           onChangeText={value => setForm('userName', value)}
           />
           <Gap height= {10} />
           <Input 
           label="Profession" 
           placeholder="Input Your Profession" 
           autoCapitalize="none" 
           value={form.profession}
           onChangeText={value => setForm('profession', value)}
           />
           <Gap height={10} /> 
          <Input 
           label="Email Address" 
           placeholder= "Input Your Email Address"
           value={form.email}
           onChangeText={value => setForm('email', value)}
           /> 
          <Gap height={10} />
          <Input 
          label="Password" 
          placeholder= "Input Your Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          />
        </KeyboardAvoidingView>
        <Gap height={24} />
      <View style = {styles.wrapBtn}>
        <TouchableOpacity style = {styles.btn} activeOpacity={0.6} onPress={onContinue}>
            <Text style = {styles.textBtn}>
               Continue
            </Text>
        </TouchableOpacity>
      </View>
      </View>
      {loading && <Loading />}
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
  alignItems: "center",
},

})
