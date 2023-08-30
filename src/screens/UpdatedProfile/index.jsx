import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, getData, useForm } from '../../utils'
import { Header } from '../../components/molecules'
import { DummyUser, IconRemovePhoto } from '../../assets'
import { Button, Gap, Input } from '../../components/atoms'
import { showMessage } from 'react-native-flash-message'
import { firebase } from '@react-native-firebase/database';

const UpdatedProfile = () => {

    const [profile, setProfile] = useState({
      userName: '',
      email : ',',
      profession: '',
    })

    const [password, setpassword] = useState('')

    useEffect(() => {
      getData('user').then(res => {
        const data = res;
        data.photo = {uri: res.photo};
        setProfile(data);
      })
    }, [])

    const getUpdate = () => {
      const data = profile;
      data.photo = profile.photo.uri
     firebase.database().ref(`users/${profile.uid}/`)
     .update(data)
     .then(() => {
      console.log('update: ');
     })
     .catch(err => {
      showMessage({
        message: err.message,
        backgroundColor: colors.fivetery,
        color: "#FFFFFF"
      })
     })
    }

    const changeText = (key, value) => {
      setProfile({
        ...profile,
        [key]: value
      })
    }

  return (
    <View style={styles.page}>
    <Header title="Update Profile"/>
    <View style = {styles.content}>
      <View style = {styles.profile}>
        <TouchableOpacity style={styles.avatarWrapper} >
          <Image source={profile.photo} style = {styles.avatar}/>
          <IconRemovePhoto style = {styles.addPhoto}/>
        </TouchableOpacity>
          <Text style = {styles.headerText}>{profile.userName}</Text>
          <Text style = {styles.jobsText}>{profile.profession}</Text>
      </View>
      <View>
            <KeyboardAvoidingView>
                <Input label="Username" 
                 placeholder="Username" 
                 value={profile.userName}
                 onChangeText={(value) => changeText('userName', value)}
                />
                <Input label="Email Address" 
                placeholder="Email address" 
                value={profile.email} 
                disable
                />
                <Gap height= {24} /> 
                <Input label="password" 
                placeholder= "Input Password" 
                value={profile.password} 
                />

                <Gap height= {24} /> 
                <Input label="Profession" 
                placeholder= "Profession" 
                value={profile.profession} 
                />
                <Gap height={10} />
            </KeyboardAvoidingView>
          </View>
    <View>
      <Button 
       title="Save Your Update Profile" 
       onPress={getUpdate}
       />
       <Gap height={12} />
       <TouchableOpacity style={styles.btnCancel}>
         <Text style = {styles.canceltext} >Batal</Text>
       </TouchableOpacity>
    </View>
    </View>
  </View>
  )
}

export default UpdatedProfile

const styles = StyleSheet.create({

    avatar: {
        width: 110,
        height: 110,
        borderRadius: 130 / 2 
      },
    
      profile: {
        alignItems: 'center',
        marginTop: 40,
      },
    
      avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderRadius: 130 / 2,
        alignItems: "center",
        justifyContent: "center",
        borderColor: colors.border
      },
    
      page: {
        flex: 1,
      },
    
      content: {
        marginTop: 10,
        paddingHorizontal: 40,
        flex: 1,
        backgroundColor: colors.grow,
        justifyContent: "space-between",
        paddingBottom: 65
    
      },
    
      addPhoto: {
        position: "absolute",
        bottom: 8,
        right: 6
      },
    
      headerText: {
        fontSize: 24,
        fontFamily: fonts.primary[400],
        textAlign: 'center'
      },
    
      jobsText: {
        fontSize: 18,
        fontFamily: fonts.primary[300],
        textAlign: "center",
        marginTop: 4,
        color: colors.tertiary
      },

      btnCancel: {
        paddingVertical: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.fivetery
      },

      canceltext: {
        fontFamily: fonts.primary[400],
        fontSize: 18,
        color: colors.grow
      }
})