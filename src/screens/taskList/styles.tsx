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
    marginLeft: wp(14),
    marginBottom: hp(1),
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  header: {
    flex: 2,
    justifyContent: 'flex-end',
    // paddingVertical: hp(2),
    backgroundColor: 'lightgreen',
  },
  line: {
    marginLeft: wp(14),
    height: 4,
    width: wp(86),
    marginTop: hp(1),
    backgroundColor: 'lightgrey',
  },
});

export default Styles;
