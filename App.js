/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Geolocation from '@react-native-community/geolocation';
import React, { useEffect } from 'react';
import { StatusBar, useColorScheme, PermissionsAndroid, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import RootNavigation from './src/Navigation/Root';
navigator.geolocation = require('@react-native-community/geolocation');

const AndroidPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Uber Location Permission",
        message:
          "Uber needs access to your location " +
          "so you can book rides.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the Location");
    } else {
      console.log("location permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}


const App = () => {

  useEffect(() => {
    if (Platform.OS == 'android') {
      AndroidPermissions()
    }
    else {
      Geolocation.requestAuthorization()
    }
  }, [])
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <ScrollView>
    // <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    <RootNavigation />
    // </ScrollView>
  );
};



export default App;