import React from 'react'
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import WhereToScreen from '../Screens/WhereToScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideConfirmationScreen from '../Screens/RideConfirmationScreen';
const Stack = createNativeStackNavigator();

const DrawerNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home' >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name={'DestinationSearch'} component={WhereToScreen} />
            <Stack.Screen name={'ConfirmRide'} component={RideConfirmationScreen} />
        </Stack.Navigator>
    )
}

export default DrawerNavigation

const styles = StyleSheet.create({})
