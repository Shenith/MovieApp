import {View} from 'react-native';
import React from 'react';
import MAText from '../../atoms/MAText.tsx';
import {styles} from './styles';

const MovieEmptyComponent = () => {
  return (
    <View style={styles.container}>
      <MAText type={'H5'}>
        Sorry! Something happened. Movie list is empty. Pull to refresh.
      </MAText>
    </View>
  );
};

export default MovieEmptyComponent;
