import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import HomeScreen from './screens/Home'
import ProfileScreen from './screens/Profile'
import TabsTest from './screens/TabsTest'
import TestApi from './screens/TestApi'
import Location from './screens/Location'
import Camera from './screens/Camera'

const MainNavigator = createStackNavigator({
  // Home: {screen: TabsTest},
  Home: {screen: TestApi},
  Profile: {screen: ProfileScreen},
  Location: {screen: Location},
  Camera: {screen: Camera},
});

const App = createAppContainer(MainNavigator);

export default App;


