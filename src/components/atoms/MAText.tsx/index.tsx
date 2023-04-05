import {StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';
import {Testable, TextType} from '../../../utils/types';
import theme from '../../../utils/theme';
import {styles} from './styles';
import makeTestId from '../../../utils/helpers/makeTestID';

interface Props extends Partial<Testable> {
  style?: StyleProp<TextStyle> | undefined;
  type?: TextType;
  color?: string;
  children: string | number | JSX.Element | undefined;
  onPress?: () => void;
  italic?: boolean;
  numberOfLines?: number;
  maxLength?: number;
}

const {colors} = theme;

const MAText = ({
  type = 'H1',
  style,
  children,
  color,
  testID = 'atom_MAText',
  onPress,
  italic,
  numberOfLines,
  maxLength,
}: Props) => {
  const styleObject = Object.assign(
    {},
    styles.text,
    styles[`${type}Text`],
    style,
    italic ? {fontStyle: 'italic'} : {},
  );
  return (
    <Text
      style={[styleObject, {color: color || colors.black}]}
      testID={makeTestId(testID)}
      onPress={onPress}
      numberOfLines={numberOfLines}>
      {maxLength && children && children?.toString().length > maxLength
        ? children.toString().substring(0, maxLength - 3) + '...'
        : children}
    </Text>
  );
};

export default MAText;
