import React from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import PieChart from 'react-native-pie-chart';
import ListCardItem from '../../components/ListCardItem';
import Styles from './styles';
import {useNavigation} from '@react-navigation/native';

const widthAndHeight = 20;
const series = [123, 321];
const sliceColor = ['#ff6c00', 'lightgray'];

export const TaskList = () => {
  const navigation = useNavigation();

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <TouchableOpacity
          style={Styles.close}
          onPress={() => navigation.goBack()}>
          <Text style={Styles.closeText}>X</Text>
        </TouchableOpacity>
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
      <View style={Styles.todoList}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <ListCardItem data={item} fullWidth={true} dark={true} date />
          )}
          // keyExtractor={item => item.id}
        />
      </View>
      <View style={Styles.footer}>
        <TouchableOpacity style={Styles.addButton}>
          <Text style={Styles.buttonTitle}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskList;

const data = [
  {
    id: 1,
    task: 'Visit Mosque in lahore',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 1,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 1,
    task: 'Go to the tailor',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 1,
    task: 'Teach the students themselves',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 1,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 1,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 1,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 1,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 1,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 1,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
];
