import React from 'react';
import {Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';
import ListCardItem from '../../components/ListCardItem';

import Styles from './styles';

const widthAndHeight = 20;
const series = [123, 321];
const sliceColor = ['#ff6c00', 'lightgray'];

export const TaskList = () => {
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.titleView}>
          <Text>
            <Text style={Styles.title}>My </Text>
            <Text style={{...Styles.title, color: 'lightgray'}}>Tasks</Text>
          </Text>
        </View>
        <View style={{...Styles.titleView, ...Styles.stats}}>
          <View style={Styles.pieChart}>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.45}
              coverFill={'#FFF'}
              style={{width: 2}}
            />
          </View>
          <Text>2 of 7 tasks</Text>
        </View>
        <View style={Styles.line} />
      </View>
      <View style={{flex: 6, backgroundColor: 'black'}}>
        <ListCardItem
          data={{
            id: 1,
            task: 'Visit Mosque',
            status: 'done',
          }}
        />
      </View>
    </View>
  );
};

export default TaskList;
