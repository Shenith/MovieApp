import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import MAText from '../../atoms/MAText.tsx';
import theme from '../../../utils/theme';
import {styles} from './styles';

interface Props {
  fill: number;
}

const MAProgressCircle = ({fill}: Props) => {
  return (
    <AnimatedCircularProgress
      size={50}
      width={5}
      fill={fill}
      tintColor={theme.colors.success}
      padding={2}
      rotation={0}
      style={styles.containerStyle}
      tintTransparency={false}
      backgroundColor={theme.colors.grey}>
      {() => (
        <MAText type={'body3'} color={theme.colors.white}>
          {`${fill}%`}
        </MAText>
      )}
    </AnimatedCircularProgress>
  );
};

export default MAProgressCircle;
