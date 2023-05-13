import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {wp, hp} from '../utils';
import {colors} from '../constants';

const Button = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <Text>Add List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 22,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.lightGray,
    paddingVertical: wp(2.5),
    paddingHorizontal: wp(4.5),
    marginBottom: hp(1),
  },
});

export default Button;
