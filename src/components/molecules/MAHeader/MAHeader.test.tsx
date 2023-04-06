import React from 'react';
import {render, screen} from '@testing-library/react-native';
import MAHeader from '.';
import makeTestId from '../../../utils/helpers/makeTestID';
import theme from '../../../utils/theme';

describe('MAHeader', () => {
  const testID = 'MAHeader_Test';
  it('should render correctly', () => {
    render(<MAHeader testID={testID} title={'Top Rated Movies'} />);
    const MAHeaderElement = screen.getByTestId(makeTestId(testID));
    expect(MAHeaderElement).not.toBeFalsy();
  });

  it('should show title text', () => {
    render(<MAHeader testID={testID} title={'Top Rated Movies'} />);
    const MAHeaderTextElement = screen.getByText('Top Rated Movies');
    expect(MAHeaderTextElement).not.toBeFalsy();
  });

  it('title text color should be white', () => {
    render(<MAHeader testID={testID} title={'Top Rated Movies'} />);
    const MAHeaderTextElement = screen.getByText('Top Rated Movies');
    const textStyle = MAHeaderTextElement.props.style.find(
      (style: any) => style.color,
    );
    expect(textStyle.color).toBe(theme.colors.white);
  });

  it('background color should be primaryBlue', () => {
    render(<MAHeader testID={testID} title={'Top Rated Movies'} />);
    const MAHeaderElement = screen.getByTestId(makeTestId(testID));
    expect(MAHeaderElement.props.style.backgroundColor).toBe(
      theme.colors.primaryBlue,
    );
  });
});
