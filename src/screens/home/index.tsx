/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Styles from './styles';

const Home = () => {
  console.log('object');
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.line} />
        <Text>
          <Text style={Styles.title}>Tasks </Text>
          <Text style={{...Styles.title, color: 'lightgray'}}>Lists</Text>
        </Text>
        <View style={Styles.line} />
      </View>
    </View>
  );
};

export default Home;
