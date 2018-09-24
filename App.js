import { createStackNavigator, } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import RegisterScreen from './Components/RegisterScreen';
import LinesScreen from './Components/LinesScreen';
import TimesScreen from './Components/TimesScreen';
// import SubscribeScreen from './Components/SubscribeScreen';
import StationsScreen from './Components/StationsScreen';
// import ServiceNoticesScreen from './Components/ServiceNoticesScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Lines: { screen: LinesScreen },
  Times: { screen: TimesScreen },
  // Subscribe: { screen: SubscribeScreen },
  Stations: { screen: StationsScreen },
  // Notices: { screen: ServiceNoticesScreen},
});

export default App;
