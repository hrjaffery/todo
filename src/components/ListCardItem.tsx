import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {wp, hp} from '../utils';
import CheckBox from 'react-native-check-box';
import {colors} from '../constants';

const ListCardItem = ({data, dark = true, date}) => {
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: hp(2),
    },
    item: {
      color: dark ? colors.black : colors.white,
      marginLeft: wp(2),
      width: wp(24),
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <CheckBox
        isChecked={isChecked}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
        checkBoxColor={dark ? colors.black : colors.white}
      />
      <Text numberOfLines={1} style={styles.item}>
        {data.task}
        {''}
      </Text>
    </View>
  );
};

export default ListCardItem;
