import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CheckBox from 'react-native-check-box';
import Text from '../components/Text';
import {wp, hp} from '../utils';
import {colors} from '../constants';
interface ListCardItemPropsTypes {
  data: any;
  dark?: boolean;
  date?: boolean;
  style?: any;
  fullWidth?: boolean;
}

const ListCardItem = ({
  data,
  dark = true,
  date = false,
  style,
  fullWidth = false,
}: ListCardItemPropsTypes) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: hp(2),
    },
    item: {
      color: dark ? colors.black : colors.white,
      marginLeft: wp(3),
      width: fullWidth ? wp(65) : hp(28),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    date: {
      marginLeft: wp(9.5),
    },
  });

  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={{...styles.container, ...style}}>
      <View style={styles.row}>
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

      {date && (
        <View style={styles.date}>
          <Text>Mon, April 30</Text>
        </View>
      )}
    </View>
  );
};

export default ListCardItem;
