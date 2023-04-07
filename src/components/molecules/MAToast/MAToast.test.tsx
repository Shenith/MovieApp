import React from 'react';
import {render} from '@testing-library/react-native';
import MAToast from '.';
import {ToastTypes} from '../../../constants';
import theme from '../../../utils/theme';
import makeTestId from '../../../utils/helpers/makeTestID';

describe('MAToast', () => {
  it('should render with the correct message', () => {
    const message = 'Test message';
    const {getByText} = render(
      <MAToast props={{message}} type={ToastTypes.successToast} />,
    );
    expect(getByText(message)).toBeDefined();
  });

  it('should render with the errorToast style', () => {
    const {getByTestId} = render(
      <MAToast
        testID="toast-container"
        props={{message: 'Test message'}}
        type={ToastTypes.errorToast}
      />,
    );
    const toastContainer = getByTestId(makeTestId('toast-container'));
    expect(toastContainer.props.style).toContainEqual(
      expect.objectContaining({backgroundColor: theme.colors.error}),
    );
  });

  it('should render with the successToast style', () => {
    const {getByTestId} = render(
      <MAToast
        testID="toast-container"
        props={{message: 'Test message'}}
        type={ToastTypes.successToast}
      />,
    );
    const toastContainer = getByTestId(makeTestId('toast-container'));
    expect(toastContainer.props.style).toContainEqual(
      expect.objectContaining({backgroundColor: theme.colors.success}),
    );
  });
});
