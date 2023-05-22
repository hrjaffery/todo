import {StyleSheet} from 'react-native';
import {colors} from '../../constants';
import {wp, hp} from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingLeft: wp(23),
    flex: 2,
    justifyContent: 'flex-end',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(-20),
  },
  delete: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: wp(4),
  },
  closeText: {
    fontSize: 20,
    color: colors.red,
  },
  titleView: {
    marginBottom: hp(1),
  },
  backIcon: {
    width: wp(4.5),
    height: wp(4.5),
    marginHorizontal: wp(7.5),
  },
  deleteIcon: {
    width: wp(5),
    height: wp(5),
    resizeMode: 'contain',
    padding: 2,
    tintColor: colors.red,
  },
  title: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  pieChart: {
    marginRight: wp(2),
  },
  line: {
    height: 4,
    width: wp(86),
    marginTop: hp(1),
    backgroundColor: 'lightgrey',
  },
  todoList: {
    flex: 6,
    paddingVertical: hp(2),
    paddingLeft: wp(23),
  },
  footer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  addButton: {
    width: wp(15),
    height: wp(15),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.red,
    marginRight: wp(5),
    borderRadius: 5,
  },
  buttonTitle: {
    fontSize: 30,
    color: colors.white,
  },
  modal: {
    borderRadius: 5,
    height: hp(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  closeModal: {
    alignSelf: 'flex-end',
    marginHorizontal: wp(10),
    padding: wp(1.5),
    marginVertical: wp(4),
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.red,
  },

  textInput: {
    width: wp(70),
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.red,
    padding: 10,
  },
  modalButton: {
    alignSelf: 'flex-end',
    marginHorizontal: wp(10),
    marginVertical: wp(4),
    padding: wp(3),
    paddingHorizontal: wp(8),
    borderRadius: 4,
    backgroundColor: colors.red,
  },
  modalButtonText: {
    color: colors.white,
  },
});

export default Styles;
