import React from 'react';
import {Text, View} from 'react-native';

const Home = () => {
  console.log('object');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Hello World!</Text>
    </View>
  );
};

export default Home;
