import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './screens/Home';
import theme from './utils/theme';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.primaryBlue}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
