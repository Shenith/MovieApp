import {View} from 'react-native';
import React from 'react';
import MAText from '../../atoms/MAText.tsx';
import theme from '../../../utils/theme';
import {styles} from './styles';

const MANetworkIndicator = () => {
  return (
    <View style={styles.container}>
      <MAText type="body1" color={theme.colors.white}>
        Offline
      </MAText>
    </View>
  );
};

export default MANetworkIndicator;
