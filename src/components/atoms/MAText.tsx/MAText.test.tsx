import React from 'react';
import {render} from '@testing-library/react-native';
import MAText from '.';
import theme from '../../../utils/theme';

describe('MAText', () => {
  it('should render children correctly', () => {
    const {getByText} = render(<MAText>hello world</MAText>);
    expect(getByText('hello world')).toBeDefined();
  });

  it('should render with correct style', () => {
    const {getByText} = render(
      <MAText type="H1" color={theme.colors.primaryBlue} italic>
        hello world
      </MAText>,
    );
    const text = getByText('hello world');
    expect(text.props.style).toEqual([
      {fontSize: 56, fontStyle: 'italic', fontWeight: '600'},
      {color: theme.colors.primaryBlue},
    ]);
  });

  it('should truncate text correctly when maxLength is specified', () => {
    const {getByText} = render(<MAText maxLength={6}>hello world</MAText>);
    expect(getByText('hel...')).toBeDefined();
  });

  it('calls onPress callback when text is pressed', () => {
    const onPress = jest.fn();
    const {getByText} = render(<MAText onPress={onPress}>hello world</MAText>);
    const text = getByText('hello world');
    text.props.onPress();
    expect(onPress).toHaveBeenCalled();
  });
});
