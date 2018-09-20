import { createStackNavigator, } from 'react-navigation';
import HomeScreen from './Components/HomeScreen';
import RegisterScreen from './Components/RegisterScreen';
import LinesScreen from './Components/LinesScreen';
import IndividualLineScreen from './Components/IndividualLineScreen';

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Register: { screen: RegisterScreen },
  Lines: { screen: LinesScreen },
  IndividualLine: { screen: IndividualLineScreen },
});

export default App;
