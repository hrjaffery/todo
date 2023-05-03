import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Button = () => {
  return (
    <View style={styles.container}>
      <Text>+</Text>
      <Text>Add List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});

export default Button;
