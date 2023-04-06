import React from 'react';
import MAText from '../../atoms/MAText.tsx';
import theme from '../../../utils/theme';
import {styles} from './styles';
import {MovieRateTypes} from '../../../constants';

interface Props {
  adult: boolean;
}

const MARateChip = ({adult}: Props) => (
  <MAText
    type={'body2'}
    color={theme.colors.grey2}
    style={styles.chipContainer}>
    {adult ? MovieRateTypes.R : MovieRateTypes.ALL}
  </MAText>
);

export default MARateChip;
