import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {wp, hp} from '../utils';

const ListItem = () => {
  return (
    <View style={styles.container}>
      <Text>List Item </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(2),
  },
});
export default ListItem;
