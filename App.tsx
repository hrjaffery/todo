/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigator from './src/navigator';
import {SafeAreaView} from 'react-native';
// import {store, persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        {/* <PersistGate persistor={persistor}> */}
        <Navigator />
        {/* </PersistGate> */}
      </SafeAreaView>
    </Provider>
  );
}

export default App;
