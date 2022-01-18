/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/Screens/HomeScreen';
import RideConfirmationScreen from './src/Screens/RideConfirmationScreen';
import WhereToScreen from './src/Screens/WhereToScreen';



const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <HomeScreen /> */}
      {/* <WhereToScreen /> */}
      <RideConfirmationScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;