import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {Fragment, useEffect} from 'react';
import Home from '../screens/Home';
import {utilsScreenStyles} from '../utils/styles';
import Toast from 'react-native-toast-message';
import {useNetInfo} from '@react-native-community/netinfo';
import MANetworkIndicator from '../components/molecules/MANetworkIndicator';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {getMovies} from '../redux/rootActions';
import MAToast from '../components/molecules/MAToast';
import {ToastTypes} from '../constants';

//Since this is a simple one page app, no react-navigation added

interface ToastProps {
  props: {
    message: string;
    containerStyle?: StyleProp<ViewStyle>;
  };
}

const RootNavigator = () => {
  const netInfo = useNetInfo();
  const dispatch = useDispatch<AppDispatch>();
  const toastConfig = {
    successToast: ({props}: ToastProps) => (
      <MAToast props={props} type={ToastTypes.successToast} />
    ),
    errorToast: ({props}: ToastProps) => (
      <MAToast props={props} type={ToastTypes.errorToast} />
    ),
  };

  useEffect(() => {
    if (netInfo?.isConnected === false) {
      Toast.show({
        type: ToastTypes.errorToast,
        props: {
          message: 'No internet connection',
        },
      });
    }
    if (netInfo?.isConnected === true) {
      dispatch(getMovies(1));
      Toast.show({
        type: ToastTypes.successToast,
        props: {
          message: 'You are online',
        },
      });
    }
  }, [netInfo, netInfo?.isConnected, dispatch]);

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
