import {StatusBar, StyleSheet} from 'react-native';
import theme from '../theme';

export const utilsScreenStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.white,
  },
  scrollContainer: {
    backgroundColor: theme.colors.primaryBlue,
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
