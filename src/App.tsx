import React, {Fragment} from 'react';
import {Platform, SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './redux/store';
import Home from './screens/Home';
import {utilsScreenStyles} from './utils/styles';

const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Fragment>
          <SafeAreaView style={utilsScreenStyles.mainContainerTop} />
          <SafeAreaView style={utilsScreenStyles.mainContainerBottom}>
            <StatusBar
              barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
            />
            <Home />
          </SafeAreaView>
        </Fragment>
      </PersistGate>
    </Provider>
  );
};

export default App;
