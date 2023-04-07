import React from 'react';
import {render} from '@testing-library/react-native';
import MARateChip from '.';

describe('MARateChip', () => {
  it('should render R text when adult prop is true', () => {
    const {getByText} = render(<MARateChip adult={true} />);
    const rateText = getByText('R');
    expect(rateText).toBeTruthy();
  });

  it('should renders correctly when adult is false', () => {
    const {getByText} = render(<MARateChip adult={false} />);
    const rateText = getByText('All');
    expect(rateText).toBeTruthy();
  });
});
