import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import NavigationService from './src/config/service/navigation';
import Route from './src/navigation/route';

const App = () => {
  return (
    <React.Fragment>
      <StatusBar
        animated
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <GestureHandlerRootView style={styles.container}>
        <NavigationContainer ref={NavigationService.navigationRef}>
          <Route />
        </NavigationContainer>
      </GestureHandlerRootView>
    </React.Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: Colors.white,
  },
});
