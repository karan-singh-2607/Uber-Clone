/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Geolocation from '@react-native-community/geolocation';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  PermissionsAndroid,
  Platform
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/Screens/HomeScreen';
import RideConfirmationScreen from './src/Screens/RideConfirmationScreen';
import WhereToScreen from './src/Screens/WhereToScreen';
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

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <HomeScreen /> */}
      <WhereToScreen />
      {/* <RideConfirmationScreen /> */}

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;