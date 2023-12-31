import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Chatting, ChooseDoctor, DetailDoctor, GetStarted, Home, Login, Messages, Profile, Register, UpdatedProfile, Uploud } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components/molecules';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Messages' component={Messages}/>
            <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
    )
}

const Router = () => {

    return (
    <Stack.Navigator initialRouteName='MainApp'>
        <Stack.Screen name='GetStarted' component={GetStarted} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='Uploud' component={Uploud} options={{headerShown: false}}/>
        <Stack.Screen name='ChooseDoctor' component={ChooseDoctor} options={{headerShown: false}}/>
        <Stack.Screen name='Chatting' component={Chatting} options={{headerShown: false}}/>
        <Stack.Screen name='UpdatedProfile' component={UpdatedProfile} options={{headerShown: false}}/>
        <Stack.Screen name='DetailDoctor' component={DetailDoctor} options={{headerShown: false}}/>
        <Stack.Screen name='MainApp' component={MainApp} options={{headerShown: false}}/>
     </Stack.Navigator>
    )

}

export default Router;
