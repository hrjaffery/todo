/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../components/Text';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {wp, hp} from '../utils';
import {colors} from '../constants';
import ListCardItem from './ListCardItem';
interface dataItemTaskTypes {
  id: number;
  task: string;
  status: string;
}
interface dataItemTypes {
  id: number;
  title: string;
  tasks: dataItemTaskTypes[];
}
interface ListCardPropsTypes {
  data: dataItemTypes;
  index: number;
  dark: boolean;
}

const ListCard = ({data, index, dark = false}: ListCardPropsTypes) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const getColor = () => {
    if (index === 0) {
      return colors.green;
    }
    if (index === 1) {
      return colors.purple;
    }
    if (index % 2 === 0) {
      return colors.red;
    }
    if (index % 3 === 0) {
      return colors.green;
    } else {
      return colors.black;
    }
  };

  const styles = StyleSheet.create({
    container: {
      height: hp(36),
      width: wp(41),
      paddingLeft: wp(6),
      paddingRight: wp(4),
      marginTop: wp(4),
      marginLeft: wp(4),
      borderRadius: 5,
      backgroundColor: getColor(),
    },
    title: {
      color: colors.white,
      fontSize: 16,
      fontWeight: 'bold',
    },
    headerView: {marginTop: hp(5), justifyContent: 'center'},
    line: {
      width: wp(35),
      height: 2,
      marginVertical: hp(2),
      backgroundColor: 'lightgray',
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <View style={styles.line} />
      {data.tasks.map((task, index) => {
        if (index < 4) {
          return <ListCardItem data={task} dark={dark} />;
        }
        if (index === 4) {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('TaskList')}>
              <Text
                style={{textDecorationLine: 'underline', color: colors.white}}>
                see more
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default ListCard;
