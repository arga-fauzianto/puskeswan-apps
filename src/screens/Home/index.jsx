import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { DoctorCategory, FaqItem, NewsItem } from '../../components/molecules'
import { colors, fonts } from '../../utils'
import { HomeProfile } from '../../components/molecules'
import { Gap } from '../../components/atoms'
import { JSONCategoryDoctor } from '../../assets'

const Home = ({ navigation }) => {
  return (
    <View style = {styles.page}>
      <ScrollView vertical showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <HomeProfile />
          <Text style ={styles.welcome}>Mau Konsultasi Peliharan kamu Dengan Siapa ?</Text>
          <Gap height={12} />
          <View style ={styles.category}>

            {JSONCategoryDoctor.data.map(item => {
              return <DoctorCategory key={item.id} category={item.category} onPress={() => navigation.navigate('ChooseDoctor')}/>
            })}

          </View>
          <Gap height={12} />
          <View style = {styles.wrapperNews}>
            <Text style = {styles.titleNews}>
              Kamu Harus Tau
            </Text>
            <Gap height={12}/>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style= {styles.news}>
                <NewsItem />
                <NewsItem />
                <NewsItem />
              </View>
            </ScrollView>
          </View>
         <Gap height={12} />
         <View style = {styles.faqWrapper}>
           <Text style = {styles.textFaq}>
            Apa saja yang selalu ditanyakan?
           </Text>
           <Gap height={12} />
           <FaqItem title= "Apa itu puskeswan?" />
           <FaqItem title= "Bagaimana konsultasi disini?" />
           <FaqItem title= "Berapa Biaya Konsultasi disini?" />
           <FaqItem title= "Dimana Lokasinya?" />
         </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    flex: 1,
    paddingVertical: 30,
    backgroundColor: colors.grow
  },

  welcome: {
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    fontSize: 18,
    marginTop: 30,
    marginBottom: 16,
    maxWidth: 309

  },

  profileWrap: {
    borderRadius: 10,
    backgroundColor: colors.primary
  },

  category: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  news: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingBottom: 5
  },

  wrapperNews: {
    flex: 1,
  },
  titleNews: {
    color: colors.text.primary,
    fontSize: 14,
    fontFamily: fonts.primary[400]
  },

  faqWrapper: {
    paddingVertical: 9
  },
  textFaq: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary
  }

})
