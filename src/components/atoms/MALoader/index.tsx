import React from 'react';
import Lottie from 'lottie-react-native';
import Assets from '../../../assets/loader';
import {styles} from './styles';
import {View} from 'react-native';

export default function MALoader() {
  return (
    <View style={styles.container}>
      <Lottie
        source={Assets.loaders.circleLoader}
        style={styles.lottieBackground}
        autoPlay
        loop
      />
    </View>
  );
}
