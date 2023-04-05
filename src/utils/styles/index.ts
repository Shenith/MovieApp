import {StyleSheet} from 'react-native';
import theme from '../theme';

export const utilsScreenStyles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  mainContainerTop: {
    backgroundColor: theme.colors.primaryBlue,
    flex: 0,
  },
  mainContainerBottom: {
    backgroundColor: theme.colors.white,
    flex: 1,
  },
});
