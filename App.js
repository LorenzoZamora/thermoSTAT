import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CertificationScreen from "./src/screens/CertificationScreen";
import QuestionScreen from "./src/screens/QuestionScreen";
import PassFailScreen from "./src/screens/PassFailScreen";
import TemperatureScreen from "./src/screens/TemperatureScreen";

const navigator = createStackNavigator({
  Home: HomeScreen,
  Certify: CertificationScreen,
  Question: QuestionScreen,
  Temperature: TemperatureScreen,
  PassFail: PassFailScreen
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
  options: {
    headerShown: false
  }
});

export default createAppContainer(navigator);
