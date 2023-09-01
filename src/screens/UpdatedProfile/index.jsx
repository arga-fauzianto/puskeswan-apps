import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors, fonts, getData, storeData, useForm } from '../../utils'
import { EditProfile, Header, Profile } from '../../components/molecules'
import { DummyUser, ILLNullPhoto, IconRemovePhoto } from '../../assets'
import { Button, Gap, Input } from '../../components/atoms'
import { showMessage } from 'react-native-flash-message'
import { firebase } from '@react-native-firebase/database';
import { launchImageLibrary } from 'react-native-image-picker'
import auth from '@react-native-firebase/auth'


const UpdatedProfile = ({ navigation }) => {

    const [profile, setProfile] = useState({
      userName: '',
      email : ',',
      profession: '',
      photoDB: ''

    })

    const [password, setPassword] = useState('')
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photo, setPhoto] = useState(ILLNullPhoto)
    const [photoDB, setPhotoDB] = useState('');

    useEffect(() => {
      getData('user').then(res => {
        const data = res;
        data.photoDB = res?.photo?.length > 1 ? res.photo : ILLNullPhoto;
        const tempPhoto = res?.photo?.length > 1 ? { uri: res.photo } : ILLNullPhoto;
        setPhoto(tempPhoto);
        setProfile(data);
      })
    }, [])

    const getUpdate = () => {
      const data = profile;
      data.photo = profile.photoDB
     firebase.database().ref(`users/${profile.uid}/`)
     .update(data)
     .then(() => {
      console.log('update: ');
      storeData('user', data)
     })
     .catch(err => {
      showMessage({
        message: err.message,
        backgroundColor: colors.fivetery,
        color: "#FFFFFF"
      })
     })
    }

    const update = () => {
      if(password.length > 0 ) {
        if(password.length < 5) {
          showMessage({
            message: 'opps password kamu kurang dari 5 karakter',
            type: 'default',
            backgroundColor: colors.fivetery,
            color: "#FFFFFF"
          })
        } else {
          updatePassword();
          getUpdate();
          navigation.replace('MainApp')
        }
      } else {
        getUpdate();
        navigation.replace('MainApp')
      }
    }

    const updatePassword = () => {
      auth().onAuthStateChanged(user => {
        if (user) {
          user.updatePassword(password).catch(err => {
            showMessage({
              message: err.message,
              type: 'default',
              backgroundColor: colors.fivetery,
              color: "#FFFFFF"
            })
          })
        }
      })
    }

    const changeText = (key, value) => {
      setProfile({
        ...profile,
        [key]: value
      })
    }

    const getImage = () => {
      launchImageLibrary({quality: 0.5, maxHeight: 150, maxWidth: 150, includeBase64:true}, response => {
        console.log('response', response);
        if(response.didCancel || response.errorMessage) {
          showMessage({
            message: 'oops, kamu tidak memilih photo?',
            type: 'default',
            backgroundColor: colors.fivetery,
            color: colors.grow,
            style: {marginBottom: 30}
          })
        } else {
          console.log('response getImage: ', response);
          const source = {uri: response.uri}
          setProfile({
            ...profile,
            photoDB: `data:${response.type};base64, ${response.base64}`
          })
          setPhoto(source)
        }
      })
    }
  
  //   const UploudContinue = () => {
  //     firebase.database().ref('users/' + uid + '/')
  //     .update({photo: photoDB});
  
  //     const data = route.params;
  //     data.photo = photoDB;
  
  //     storeData('user', data);
  
  //     navigation.replace('MainApp')
  // }
  //   }

  return (
    <View style={styles.page}>
    <Header title="Update Profile"/>
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
    <View style = {styles.content}>
      <View style = {styles.profile}>
       <Profile isRemove photo={photo} onPress={getImage} />
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
                secureTextEntry 
                value={password} 
                onChangeText={value => setPassword(value)} 
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
       onPress={update}
       />
       <Gap height={12} />
       <TouchableOpacity style={styles.btnCancel}>
         <Text style = {styles.canceltext} >Batal</Text>
       </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
    
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