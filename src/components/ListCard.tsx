/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {wp, hp} from '../utils';
import {colors} from '../constants';
import ListItem from './ListItem';

const ListCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <View style={styles.line} />
      {data.tasks.map((task, index) => {
        console.log(index);
        if (index < 4) {
          return <ListItem data={task} />;
        }
        if (index == 4) {
          return <Text style={{color: colors.white}}>see more</Text>;
        }
      })}
    </View>
  );
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
    backgroundColor: 'black',
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

export default ListCard;
