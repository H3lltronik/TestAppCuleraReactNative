import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import React, { Component } from 'react';

import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import TabsTest from './screens/TabsTest'
import TestApi from './screens/TestApi'
import Location from './screens/Location'
import Camera from './screens/Camera'
import ImagePreview from './screens/ImagePreview'

import {Provider} from 'react-redux';
import configureStore from './store/index'

let store = configureStore()
const unsubscribe = store.subscribe(() => {
  console.log('store update, current state:');
  console.log(store.getState());
});

const MainNavigator = createStackNavigator({
  // Home: {screen: TabsTest},
  Home: {screen: TestApi},
  Profile: {screen: ProfileScreen},
  Location: {screen: Location},
  Camera: {screen: Camera},
  ImagePreview: {screen: ImagePreview},
});

const Root = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
