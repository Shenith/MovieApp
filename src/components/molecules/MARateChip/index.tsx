import React from 'react';
import MAText from '../../atoms/MAText.tsx';
import theme from '../../../utils/theme';
import {styles} from './styles';

interface Props {
  adult: boolean;
}

const MARateChip = ({adult}: Props) => {
  return (
    <MAText
      type={'body2'}
      color={theme.colors.grey2}
      style={styles.chipContainer}>
      {adult ? 'R' : 'All'}
    </MAText>
  );
};

export default MARateChip;
