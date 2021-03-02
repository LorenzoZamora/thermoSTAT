import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CertificationScreen from "./src/screens/CertificationScreen";
import QuestionScreen from "./src/screens/QuestionScreen";
import PassFailScreen from "./src/screens/PassFailScreen";

const navigator = createStackNavigator({
  Home: HomeScreen,
  Certify: CertificationScreen,
  Question: QuestionScreen,
  PassFail: PassFailScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    // title: 'ThermoSTAT'
  },
  headerMode: 'none',
  options: {
    headerShown: false
  }
});

export default createAppContainer(navigator);
