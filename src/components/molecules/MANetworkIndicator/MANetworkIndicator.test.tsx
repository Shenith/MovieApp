import React from 'react';
import {render} from '@testing-library/react-native';
import MANetworkIndicator from '.';
import theme from '../../../utils/theme';

describe('MANetworkIndicator', () => {
  it('should render offline text', () => {
    const {getByText} = render(<MANetworkIndicator />);
    const offlineText = getByText('Offline');
    expect(offlineText).toBeDefined();
  });

  it('should renders with white text color', () => {
    const {getByText} = render(<MANetworkIndicator />);
    const offlineText = getByText('Offline');
    expect(offlineText.props.style).toEqual(
      expect.arrayContaining([{color: theme.colors.white}]),
    );
  });
});
