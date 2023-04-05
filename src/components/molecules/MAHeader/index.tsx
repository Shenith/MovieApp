import {View} from 'react-native';
import React from 'react';
import MAText from '../../atoms/MAText.tsx';
import theme from '../../../utils/theme';
import {styles} from './styles';

interface Props {
  title: string;
}

const MAHeader = ({title}: Props) => {
  return (
    <View style={styles.container}>
      <MAText type={'H4'} color={theme.colors.white}>
        {title}
      </MAText>
    </View>
  );
};

export default MAHeader;
