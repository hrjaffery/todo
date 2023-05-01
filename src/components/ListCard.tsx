import React from 'react';
import {Text, View} from 'react-native';

const ListCard = () => {
  return (
    <View
      style={{
        paddingLeft: 20,
        paddingRight: 10,
        backgroundColor: 'yellow',
        margin: 10,
        height: 270,
        width: 140,
        borderRadius: 5,
      }}>
      <View style={{marginTop: 30, justifyContent: 'center'}}>
        <Text>Trip to Paris</Text>
      </View>
      <View
        style={{
          width: 120,
          height: 2,
          backgroundColor: 'lightgray',
        }}></View>
    </View>
  );
};

export default ListCard;
