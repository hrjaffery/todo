/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {wp, hp} from '../utils';
import ListItem from './ListItem';

const ListCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text>Trip to Paris</Text>
      </View>
      <View style={styles.line} />
      <ListItem />
      <ListItem />
      <ListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(33),
    width: wp(41),
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
    marginVertical: hp(2),
    backgroundColor: 'lightgray',
  },
});

export default ListCard;
