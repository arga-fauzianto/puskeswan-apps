import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, Home, Login, Register, Uploud } from '../screens';

const Stack = createStackNavigator();

const Router = () => {

    return (
    <Stack.Navigator initialRouteName='Uploud'>
        <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Uploud' component={Uploud} options={{headerShown: false}}/>
     </Stack.Navigator>
    )

}

export default Router;
