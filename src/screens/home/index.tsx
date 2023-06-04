/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';
import Text from '../../components/Text';
import ListCard from '../../components/ListCard';
import Button from '../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import Styles from './styles';

const Home = () => {
  const data = useSelector(state => state.counter);
  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.headerElements}>
          <View style={Styles.line} />
          <Text>
            <Text style={Styles.title}>{data} </Text>
            <Text style={{...Styles.title, color: 'lightgray'}}>Lists</Text>
          </Text>
          <View style={Styles.line} />
        </View>
      </View>
      <View style={Styles.buttonView}>
        <Button />
      </View>
      <View style={Styles.listView}>
        <FlatList
          data={todoList}
          renderItem={({item, index}) => (
            <ListCard data={item} index={index} dark={false} />
          )}
          keyExtractor={item => item.id.toString()}
          horizontal={true}
        />
      </View>
    </View>
  );
};

export default Home;

const todoList = [
  {
    id: 1,
    title: 'Trip to Lahore',
    tasks: [
      {
        id: 1,
        task: 'Visit Mosque',
        status: 'done',
      },
      {
        id: 2,
        task: 'Go to Spice bazar',
        status: 'pending',
      },
      {
        id: 3,
        task: 'Visit old lahore',
        status: 'done',
      },
      {
        id: 4,
        task: 'Visit Mosque',
        status: 'done',
      },
      {
        id: 5,
        task: 'Visit Mosque',
        status: 'done',
      },
    ],
  },
  {
    id: 1,
    title: 'Trip to Lahore',
    tasks: [
      {
        id: 1,
        task: 'Visit Mosque',
        status: 'done',
      },
      {
        id: 2,
        task: 'Go to Spice bazar',
        status: 'pending',
      },
      {
        id: 3,
        task: 'Visit old lahore',
        status: 'done',
      },
      {
        id: 4,
        task: 'Visit Mosque',
        status: 'done',
      },
      {
        id: 5,
        task: 'Visit Mosque',
        status: 'done',
      },
    ],
  },
  {
    id: 1,
    title: 'Trip to Lahore',
    tasks: [
      {
        id: 1,
        task: 'Visit Mosque',
        status: 'done',
      },
      {
        id: 2,
        task: 'Go to Spice bazar',
        status: 'pending',
      },
      {
        id: 3,
        task: 'Visit old lahore',
        status: 'done',
      },
      {
        id: 4,
        task: 'Visit Mosque',
        status: 'done',
      },
      {
        id: 5,
        task: 'Visit Mosque',
        status: 'done',
      },
    ],
  },
  {
    id: 1,
    title: 'Trip to Lahore',
    tasks: [
      {
        id: 1,
        task: 'Visit Mosque',
        status: 'done',
      },
      {
        id: 2,
        task: 'Go to Spice bazar',
        status: 'pending',
      },
      {
        id: 3,
        task: 'Visit old lahore',
        status: 'done',
      },
      {
        id: 4,
        task: 'Visit Mosque',
        status: 'done',
      },
      {
        id: 5,
        task: 'Visit Mosque',
        status: 'done',
      },
    ],
  },
];
