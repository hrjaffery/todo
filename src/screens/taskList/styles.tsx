import {StyleSheet} from 'react-native';
import {colors} from '../../constants';
import {wp, hp} from '../../utils';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  pieChart: {
    marginRight: wp(2),
  },
  title: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleView: {
    // marginLeft: wp(14),
    marginBottom: hp(1),
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  header: {
    paddingLeft: wp(23),
    flex: 2,
    justifyContent: 'flex-end',
    // paddingVertical: hp(2),
    // backgroundColor: 'lightgreen',
  },
  line: {
    // marginLeft: wp(14),
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
    // backgroundColor: 'yellow',
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
});

export default Styles;
