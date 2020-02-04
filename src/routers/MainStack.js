import {createStackNavigator} from 'react-navigation-stack';
import Colors from '../Theme/color';
import React from 'react';
import Home from "../screens/Home";
import Menu from "../screens/Menu/Menu";
import Profile from "../screens/Profile/Profile";
import ScorePage from "../screens/Profile/ScorePage";
import PlacesDetail from "../screens/Places/PlacesDetail";
import AddTag from "../screens/Places/AddTag";
import AddAccessibility from "../screens/Places/AddAccessibility";
import TagScreen from "../screens/Places/TagScreen";
import Neighbourhood from "../screens/Places/Neighbourhood";
import ThankYouScreen from "../screens/Places/ThankYouScreen";
import EnterAddress from "../screens/Rate/EnterAddress";
import FindMe from "../screens/FindMe/FindMe";

const MainStack = createStackNavigator(
  {
    Home,
    Menu,
    Profile,
    ScorePage,
    PlacesDetail,
    AddTag,
    AddAccessibility,
    TagScreen,
    Neighbourhood,
    ThankYouScreen,
    EnterAddress,
    FindMe
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    cardStyle: {
      backgroundColor: Colors.Background,
    },
  },
);


export default MainStack;
