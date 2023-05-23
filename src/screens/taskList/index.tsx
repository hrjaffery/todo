import React, {useState} from 'react';
import {FlatList, View, TouchableOpacity, TextInput, Image} from 'react-native';
import Modal from 'react-native-modal';
import Text from '../../components/Text';
import PieChart from 'react-native-pie-chart';
import ListCardItem from '../../components/ListCardItem';
import Styles from './styles';
import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const widthAndHeight = 21;
const series = [123, 321];
const sliceColor = ['#ff6c00', 'lightgray'];

export const TaskList = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.header}>
        <View style={Styles.row1}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Image
              style={Styles.backIcon}
              source={require('../../assets/back.png')}
            />
          </TouchableOpacity>
          <View style={Styles.titleView}>
            <Text>
              <Text style={Styles.title}>My </Text>
              <Text style={{...Styles.title, color: 'lightgray'}}>Tasks</Text>
            </Text>
          </View>
          <TouchableOpacity style={Styles.delete} onPress={() => 0}>
            <Image
              style={Styles.deleteIcon}
              source={require('../../assets/delete.png')}
            />
          </TouchableOpacity>
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
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={Styles.footer}>
        <TouchableOpacity style={Styles.addButton} onPress={toggleModal}>
          <Text style={Styles.buttonTitle}>+</Text>
        </TouchableOpacity>
      </View>
      {isModalVisible && (
        <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
          <View style={Styles.modal}>
            <TouchableOpacity style={Styles.closeModal} onPress={toggleModal}>
              <Image
                style={Styles.deleteIcon}
                source={require('../../assets/cross.png')}
              />
            </TouchableOpacity>
            <TextInput
              placeholder="Enter task here.."
              style={Styles.textInput}
            />
            <TouchableOpacity style={Styles.modalButton} onPress={toggleModal}>
              <Text style={Styles.modalButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
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
    id: 2,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 3,
    task: 'Go to the tailor',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 4,
    task: 'Teach the students themselves',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 5,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 6,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 7,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 8,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 9,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
  {
    id: 10,
    task: 'Visit Mosque',
    status: 'done',
    date: '12-03-23',
  },
];
