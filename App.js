import { createStackNavigator, } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import RegisterScreen from './Components/RegisterScreen';
import LinesScreen from './Components/LinesScreen';
import IndividualLineScreen from './Components/IndividualLineScreen';
import TimesScreen from './Components/TimesScreen';
import SubscribeScreen from './Components/SubscribeScreen';
import StationsScreen from './Components/StationsScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Lines: { screen: LinesScreen },
  IndividualLine: { screen: IndividualLineScreen },
  Times: { screen: TimesScreen },
  Subscribe: { screen: SubscribeScreen },
  Stations: { screen: StationsScreen },
});

export default App;
