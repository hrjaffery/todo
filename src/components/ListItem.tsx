import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {wp, hp} from '../utils';
import CheckBox from 'react-native-check-box';

const ListItem = () => {
  return (
    <View style={styles.container}>
      <CheckBox checkBoxColor={'white'} />
      <Text style={styles.item}>List Item </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: hp(2),
  },
  item: {
    marginLeft: wp(2),
  },
});

export default ListItem;
