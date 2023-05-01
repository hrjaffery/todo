/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ListCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text>Trip to Paris</Text>
      </View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: 'yellow',
    margin: 10,
    height: 270,
    width: 140,
    borderRadius: 5,
  },
  headerView: {marginTop: 30, justifyContent: 'center'},
  line: {
    width: 120,
    height: 2,
    backgroundColor: 'lightgray',
  },
});

export default ListCard;
