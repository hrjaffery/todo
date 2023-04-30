/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigator from './src/navigator';
// import Home from './src/screens/home';
import {SafeAreaView} from 'react-native';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      <Navigator />
    </SafeAreaView>
  );
}

export default App;
