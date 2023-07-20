import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Router from './route';
import { StatusBar } from 'react-native';


const App = () => {

  return (

    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )


}

export default App;

