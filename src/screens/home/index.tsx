import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';

const Home = () => {
  console.log('object');
  return (
    <View style={Styles.container}>
      <Text>
        <Text style={{color: Styles.titleColor}}>Tasks</Text> <Text>Lists</Text>
      </Text>
    </View>
  );
};

export default Home;
