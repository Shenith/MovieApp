import {StyleSheet} from 'react-native';
import theme from '../../../utils/theme';

const {fontSize} = theme;

export const styles = StyleSheet.create({
  text: {
    fontStyle: 'normal',
    //H1Text
    fontSize: fontSize.fs56,
  },
  H1Text: {
    fontSize: fontSize.fs56,
    fontWeight: '600',
  },
  H2Text: {
    fontSize: fontSize.fs40,
    fontWeight: '600',
  },
  H3Text: {
    fontSize: fontSize.fs24,
    fontWeight: '600',
  },
  H4Text: {
    fontSize: fontSize.fs20,
    fontWeight: '600',
  },
  H5Text: {
    fontSize: fontSize.fs16,
    fontWeight: '600',
  },
  H6Text: {
    fontSize: fontSize.fs14,
    fontWeight: '600',
  },
  body1Text: {
    fontSize: fontSize.fs16,
    fontWeight: '400',
  },
  body2Text: {
    fontSize: fontSize.fs14,
    fontWeight: '400',
  },
  body3Text: {
    fontSize: fontSize.fs12,
    fontWeight: '400',
  },
});
