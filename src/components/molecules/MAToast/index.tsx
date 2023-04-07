import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import MAText from '../../atoms/MAText.tsx';
import {styles} from './styles';
import theme from '../../../utils/theme';
import {ToastTypes} from '../../../constants';
import {Testable} from '../../../utils/types';
import makeTestId from '../../../utils/helpers/makeTestID';

interface MAToastProps extends Partial<Testable> {
  props: {
    message: string;
    containerStyle?: StyleProp<ViewStyle>;
  };
  type: ToastTypes.errorToast | ToastTypes.successToast;
}

const MAToast = ({props, type, testID = 'molecule_MAToast'}: MAToastProps) => (
  <View
    testID={makeTestId(testID)}
    style={[
      type === ToastTypes.successToast
        ? styles.successToastContainer
        : styles.errorToastContainer,
      props.containerStyle,
    ]}>
    <View style={styles.textContainer}>
      <MAText type="H6" color={theme.colors.white}>
        {props.message}
      </MAText>
    </View>
  </View>
);

export default MAToast;
