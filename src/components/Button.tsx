import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../components/Text';
import {wp, hp} from '../utils';
import {colors} from '../constants';

import {useDispatch, useSelector} from 'react-redux';
import {incrementCounter} from '../redux/slice/counterSlice';

const Button = (): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(incrementCounter(1))}>
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
