import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme';

export const styles = StyleSheet.create({
  successToastContainer: {
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.success,
    padding: 10,
    height: 50,
  },
  errorToastContainer: {
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.error,
    padding: 10,
    height: 50,
  },
  textContainer: {
    width: '85%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
