import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './route';
import { StyleSheet } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';


const MainApp = () => {
  const stateGlobal = useSelector(state => state)
  console.log('global state : ', stateGlobal)
  return (
    <>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    <FlashMessage position="top" style={styles.showMessage}/>
    </>

    
  )
}



const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
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

