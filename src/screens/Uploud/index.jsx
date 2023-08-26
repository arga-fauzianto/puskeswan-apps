import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts, storeData } from '../../utils'
import { ILLNullPhoto, IcBack, IconAddPhoto, IconRemovePhoto } from '../../assets'
import { Header } from '../../components/molecules'
import Button from '../../components/atoms/Button'
import { Gap, Link } from '../../components/atoms'
import { launchImageLibrary } from 'react-native-image-picker'
import { firebase } from '@react-native-firebase/database'
import { showMessage } from 'react-native-flash-message'


const Uploud = ({ navigation, route }) => {

  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILLNullPhoto)
  const [photoDB, setPhotoDB] = useState('');
  const { userName, profession, uid } = route?.params || {};

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
        setPhotoDB(`data:${response.type};base64, ${response.base64}`);
        setPhoto(source)
        setHasPhoto(true)

        // const source = {uri: Response.assets[0].uri}
        // setPhotoDB(`data:${Response.type};base64, ${Response.base64}`);
        // setPhoto(source);
        // setHasPhoto(true)
      }
    })
  }

  const UploudContinue = () => {
    firebase.database().ref('users/' + uid + '/')
    .update({photo: photoDB});

    const data = route.params;
    data.photo = photoDB;

    storeData('user', data);

    navigation.replace('MainApp')
}


  return (
    <View style={styles.page}>
      <Header title="Uploud Photo"/>
      <View style = {styles.content}>
        <View style = {styles.profile}>
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style = {styles.avatar}/>
            {hasPhoto && <IconRemovePhoto style = {styles.addPhoto}/>}
            {!hasPhoto &&   <IconAddPhoto style = {styles.addPhoto}/>}
          </TouchableOpacity>
            <Text style = {styles.headerText}>{userName}</Text>
            <Text style = {styles.jobsText}>{profession}</Text>
        </View>
      <View>
        <Button 
         title="Uploud and Continue" 
         disable= {!hasPhoto}
         onPress={UploudContinue}
         />
        <Gap height={30}/>
        <Link title="Skip for this" align="center" size={16}/>
      </View>
      </View>
    </View>
  )
}

export default Uploud

const styles = StyleSheet.create({

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 130 / 2 
  },

  profile: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
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
  }
  
})