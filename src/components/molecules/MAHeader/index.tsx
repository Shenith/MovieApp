import {View} from 'react-native';
import React from 'react';
import MAText from '../../atoms/MAText.tsx';
import theme from '../../../utils/theme';
import {styles} from './styles';
import {Testable} from '../../../utils/types';
import makeTestId from '../../../utils/helpers/makeTestID';

interface Props extends Partial<Testable> {
  title: string;
}

const MAHeader = ({title, testID = 'atom_MAHeader'}: Props) => (
  <View style={styles.container} testID={makeTestId(testID)}>
    <MAText type={'H4'} color={theme.colors.white}>
      {title}
    </MAText>
  </View>
);

export default MAHeader;
