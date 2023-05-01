/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {wp, hp} from '../utils';

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
    height: hp(35),
    width: wp(35),
    paddingLeft: wp(6),
    paddingRight: wp(4),
    marginTop: wp(4),
    marginLeft: wp(4),
    borderRadius: 5,
    backgroundColor: 'yellow',
  },
  headerView: {marginTop: hp(5), justifyContent: 'center'},
  line: {
    width: wp(29),
    height: 2,
    backgroundColor: 'lightgray',
  },
});

export default ListCard;
