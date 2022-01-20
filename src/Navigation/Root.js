import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import WhereToScreen from '../Screens/WhereToScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideConfirmationScreen from '../Screens/RideConfirmationScreen';
import UserProfile from '../Screens/User Profile';
const Stack = createNativeStackNavigator();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home' >
                <Stack.Screen name={"Home"} component={HomeScreen} />
                <Stack.Screen name={'DestinationSearch'} component={WhereToScreen} />
                <Stack.Screen name={'ConfirmRide'} component={RideConfirmationScreen} />
                <Stack.Screen name={"UserProfile"} component={UserProfile} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

