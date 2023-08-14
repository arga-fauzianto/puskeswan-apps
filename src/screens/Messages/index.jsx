import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { colors, fonts } from '../../utils'
import { ListDoctor } from '../../components/molecules'
import { DummyDoctor } from '../../assets'

const Messages = () => {
  const [doctors, setDoctors] = useState([{
    id: 1,
    name: "Arga Fauzianto",
    desc: "Makasih banyak dokter atas wakt...",
    prfile: DummyDoctor
  },

  {
    id: 2,
    name: "Febi Sugiono",
    desc: "Baik dok saya akan makan jer..",
    profile: DummyDoctor,
  }

])
  return (
   <ScrollView vertical showsVerticalScrollIndicator={false} style ={styles.areaScroll}>
     <View style ={styles.content}>
      <Text style ={styles.text}>
        Messages
      </Text>
      {doctors.map(doctor => {
        return  <ListDoctor 
        profile={doctor.profile} 
        name={doctor.name} 
        desc={doctor.desc}
        key={doctor.id}
        />
      })}
     </View>
   </ScrollView>
  )
}

export default Messages

const styles = StyleSheet.create({
  areaScroll: {
    backgroundColor: colors.grow,
    flex: 1
  },

  content: {
    flex: 1,
    backgroundColor: colors.grow
  },

  text: {
    fontFamily: fonts.primary[300],
    fontSize: 20,
    marginTop: 30,
    marginLeft: 16,
    color: colors.text.primary
  
  }
})