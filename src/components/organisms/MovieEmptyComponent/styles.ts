import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme';

export const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: theme.colors.grey,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 20,
    margin: 20,
    borderRadius: 10,
  },
});
