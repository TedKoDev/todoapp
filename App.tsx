import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainScreen from './screens/MainScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store';

// App.tsx
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <MainScreen />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
