import { createStackNavigator, } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import RegisterScreen from './Components/RegisterScreen';
import LinesScreen from './Components/LinesScreen';
import IndividualLineScreen from './Components/IndividualLineScreen';
import NorthboundScreen from './Components/NorthboundScreen';
import SouthboundScreen from './Components/SouthboundScreen';
import SubscribeScreen from './Components/SubscribeScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Lines: { screen: LinesScreen },
  IndividualLine: { screen: IndividualLineScreen },
  LineNorth: { screen: NorthboundScreen },
  LineSouth: { screen: SouthboundScreen },
  Subscribe: { screen: SubscribeScreen },
});

export default App;
