import {StyleSheet} from 'react-native';
import theme from '../utils/theme';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: theme.colors.white},
  successToastContainer: {
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.success,
    padding: 10,
    height: 30,
  },
  errorToastContainer: {
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.error,
    padding: 10,
    height: 30,
  },
  textContainer: {
    width: '85%',
    height: 25,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
