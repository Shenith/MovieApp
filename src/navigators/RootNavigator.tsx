import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import React, {Fragment, useEffect} from 'react';
import Home from '../screens/Home';
import {utilsScreenStyles} from '../utils/styles';
import Toast from 'react-native-toast-message';
import {styles} from './styles';
import theme from '../utils/theme';
import MAText from '../components/atoms/MAText.tsx';
import {useNetInfo} from '@react-native-community/netinfo';
import MANetworkIndicator from '../components/molecules/MANetworkIndicator';

//Since this is a simple one page app, no react-navigation added

interface ToastProps {
  props: {
    message: string;
    containerStyle?: StyleProp<ViewStyle>;
  };
}

const RootNavigator = () => {
  const netInfo = useNetInfo();
  const toastConfig = {
    successToast: ({props}: ToastProps) => (
      <View style={[styles.successToastContainer, props.containerStyle]}>
        <View style={styles.textContainer}>
          <MAText type="H6" testID={'errorToast'} color={theme.colors.white}>
            {props.message}
          </MAText>
        </View>
      </View>
    ),
    errorToast: ({props}: ToastProps) => (
      <View style={styles.errorToastContainer}>
        <View style={styles.textContainer}>
          <MAText type="H6" testID={'errorToast'} color={theme.colors.white}>
            {props.message}
          </MAText>
        </View>
      </View>
    ),
  };

  useEffect(() => {
    if (netInfo?.isConnected === false) {
      Toast.show({
        type: 'errorToast',
        props: {
          message: 'No internet connection',
        },
      });
    }
    if (netInfo?.isConnected === true) {
      Toast.show({
        type: 'successToast',
        props: {
          message: 'You are online',
        },
      });
    }
  }, [netInfo, netInfo?.isConnected]);

  return (
    <Fragment>
      <SafeAreaView style={utilsScreenStyles.mainContainerTop} />
      <SafeAreaView style={utilsScreenStyles.mainContainerBottom}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
        />
        {netInfo?.isConnected === false && <MANetworkIndicator />}
        <Home />
        <Toast config={toastConfig} position="bottom" bottomOffset={30} />
      </SafeAreaView>
    </Fragment>
  );
};

export default RootNavigator;
