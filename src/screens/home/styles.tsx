import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  line: {
    height: 3,
    width: 80,
    backgroundColor: 'lightgrey',
  },
  title: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Styles;
