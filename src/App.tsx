import React from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import Home from './screens/Home';
import {utilsScreenStyles} from './utils/styles';

const App = () => {
  return (
    <SafeAreaView style={utilsScreenStyles.scrollContainer}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
      />
      <Home />
    </SafeAreaView>
  );
};

export default App;
