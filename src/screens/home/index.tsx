/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import ListCard from '../../components/ListCard';
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
      <View style={Styles.listView}>
        <ScrollView style={{backgroundColor: 'green'}} horizontal={true}>
          <ListCard />
          <ListCard />
          <ListCard />
          <ListCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
