import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './route';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';


const App = () => {

  return (
    <>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    <FlashMessage position="top" style={styles.showMessage}/>
    </>

    
  )


}

export default App;

const styles = StyleSheet.create({
  showMessage: {
    padding: 5,
    marginTop: 15,
    textAlign: 'center'
  },
})

