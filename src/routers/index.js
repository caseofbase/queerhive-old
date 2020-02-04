import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import Colors from '../Theme/color';

const Router = createSwitchNavigator(
  {
    AuthStack,
    MainStack,
  },
  {
    initialRouteName: 'MainStack',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: Colors.Background,
    },
  },
);

const AppContainer = createAppContainer(Router);
export default AppContainer;
