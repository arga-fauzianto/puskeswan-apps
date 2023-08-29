import { StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { colors, fonts, useForm } from '../../utils'
import { Header } from '../../components/molecules'
import { DummyUser, IconRemovePhoto } from '../../assets'
import { Button, Gap, Input } from '../../components/atoms'

const UpdatedProfile = () => {

    const [form, setForm] = useForm({email: '', password: '', profession: ''})


  return (
    <View style={styles.page}>
    <Header title="Update Profile"/>
    <View style = {styles.content}>
      <View style = {styles.profile}>
        <TouchableOpacity style={styles.avatarWrapper} >
          <Image source={DummyUser} style = {styles.avatar}/>
          <IconRemovePhoto style = {styles.addPhoto}/>
        </TouchableOpacity>
          <Text style = {styles.headerText}>Fatur Swastyani</Text>
          <Text style = {styles.jobsText}>Design Grafis</Text>
      </View>
      <View>
            <KeyboardAvoidingView>
                <Input label="Email Address" 
                placeholder="Email address" 
                value={form.email} 
                />
                <Gap height= {24} /> 
                <Input label="password" 
                placeholder= "Input Password" 
                value={form.password} 
                />

                <Gap height= {24} /> 
                <Input label="Profession" 
                placeholder= "Profession" 
                value={form.profession} 
                />
                <Gap height={10} />
            </KeyboardAvoidingView>
          </View>
    <View>
      <Button 
       title="Save Your Update Profile" 
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