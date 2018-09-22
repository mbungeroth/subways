import { createStackNavigator, } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import RegisterScreen from './Components/RegisterScreen';
import LinesScreen from './Components/LinesScreen';
import IndividualLineScreen from './Components/IndividualLineScreen';
import NorthboundScreen from './Components/NorthboundScreen';
import SouthboundScreen from './Components/SouthboundScreen';
import SubscribeScreen from './Components/SubscribeScreen';
import StationsScreen from './Components/StationsScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Lines: { screen: LinesScreen },
  IndividualLine: { screen: IndividualLineScreen },
  North: { screen: NorthboundScreen },
  South: { screen: SouthboundScreen },
  Subscribe: { screen: SubscribeScreen },
  Stations: { screen: StationsScreen },
});

export default App;
