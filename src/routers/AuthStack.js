import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../Theme/color';
import SignUp from '../screens/Auth/SignUp';
import SignIn from "../screens/Auth/SignIn";

const AuthStack = createStackNavigator(
  {
    SignUp,
    SignIn
  },
  {
    initialRouteName: 'SignUp',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: Colors.Background,
    },
  },
);
export default AuthStack;
