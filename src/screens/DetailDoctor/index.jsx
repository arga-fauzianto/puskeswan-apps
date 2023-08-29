import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Header, ItemProfileDoctor } from '../../components/molecules'
import ProfileDoctor from '../../components/molecules/ProfileDoctor'
import { DummyDoctor } from '../../assets'
import { colors } from '../../utils'
import { Button, Gap } from '../../components/atoms'

const DetailDoctor = () => {
  return (
    <View style ={ styles.container }>
      <Header title="Detail Doctor" />
      <Gap height={40} />
        <ProfileDoctor name=" Arga Fauzianto " desc= "Doketer Peliharan" photo={DummyDoctor} />
        <View style ={styles.content}>
            <ItemProfileDoctor label="Alumnus" value= "Universitah gadjah Mada" />
            <ItemProfileDoctor label="Praktik" value= "Klinik Merdeka panongan" />
            <ItemProfileDoctor label="No. STR " value= "011128900093799" />
            <Gap height={43} />
            <View style={styles.action}>
                <Button title= "Mulai Konsultasi Sekarang" />
            </View>
        </View>
    </View>
  )
}

export default DetailDoctor

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grow,
        flex: 1,
    },

    action: {
        paddingTop: 30 
    },

    content: {
        paddingHorizontal: 20,
        paddingTop: 23,
        flex: 1
    }


})