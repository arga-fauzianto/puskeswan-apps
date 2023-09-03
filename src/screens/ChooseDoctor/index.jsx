import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Header, ListDoctor } from '../../components/molecules'
import { DummyDoctor } from '../../assets'
import { colors } from '../../utils'

const ChooseDoctor = ({ navigation, route }) => {
  const itemCategory = route.params
  return (
  <SafeAreaView style={styles.container}>
    <View>
        <Header 
        title={`pilih ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
        />
    </View>
    <View style={styles.content}>
        <ListDoctor 
         profile={DummyDoctor} 
         name="Arga Fauzianto" 
         desc="Pria"  
         type='next'
         onPress={() => navigation.navigate('Chatting')}
         />
        <ListDoctor profile={DummyDoctor} name="Rafli Salamudin" desc="Pria" type='next'/>
        <ListDoctor profile={DummyDoctor} name="Ravi mutaharoh" desc="Pria"  type='next'/>
        <ListDoctor profile={DummyDoctor} name="Fatur Swastya" desc="Pria"   type='next'/>
        <ListDoctor profile={DummyDoctor} name="Febi Sugianto" desc="Pria"   type='next'/>
    </View>
  </SafeAreaView>
  )
}

export default ChooseDoctor

const styles = StyleSheet.create({
container: {
    backgroundColor: colors.grow,
    flex: 1
},
content: {
    marginTop: 20,
    backgroundColor: "white",
    flex: 1
}
})