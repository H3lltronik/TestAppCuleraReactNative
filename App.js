import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import React, { Component } from 'react';

import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import TabsTest from './screens/TabsTest'
import TestApi from './screens/TestApi'
import Location from './screens/Location'
import ImagePreview from './screens/ImagePreview'
import Logged from './screens/Logged'

import SicresaImagePreview from './screens/Sicresa/ImagePreview'
import SicresaCamera from './screens/Sicresa/Camera'
import SicresaLogin from './screens/Sicresa/Login'
import SicresaInicio from './screens/Sicresa/Inicio'
import EmployeeSchedule from './screens/Sicresa/EmployeeSchedule'
import AuthMiddleComponent from './screens/Sicresa/AuthMiddleComponent'
import RegistroCompleto from './screens/Sicresa/RegistroCompleto'

import {Provider} from 'react-redux';
import configureStore from './store/index'

let store = configureStore()
// const unsubscribe = store.subscribe(() => {
//   console.log('store update, current state:');
//   console.log(store.getState());
// });

const MainNavigator = createStackNavigator({
  // Home: {screen: TabsTest},
  // Home: {screen: SicresaCamera},
  Login: {screen: SicresaLogin},
  Home: {screen: SicresaInicio},
  EmployeeAuth: {screen: EmployeeSchedule},
  AuthMiddleComponent: {screen: AuthMiddleComponent},
  SicresaCamera: {screen: SicresaCamera},
  SicresaImagePreview: {screen: SicresaImagePreview},
  RegistroCompleto: {screen: RegistroCompleto},
  TestApi: {screen: TestApi},
  Profile: {screen: ProfileScreen},
  Location: {screen: Location},
  ImagePreview: {screen: ImagePreview},
  Logged: {screen: Logged},
},
{initialRouteName: 'RegistroCompleto'}
);

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
