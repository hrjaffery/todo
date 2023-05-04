import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    justifyContent: 'flex-end',
    flex: 2,
    // backgroundColor: 'red',
  },
  headerElements: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  line: {
    height: 4,
    width: 80,
    backgroundColor: 'lightgrey',
  },
  title: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  listView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Styles;
