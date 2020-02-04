import React from 'react';
import {Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import down from '../assets/icons/down.png';
import left from '../assets/icons/leftIcon.png';
import right from '../assets/icons/rightIcon.png';
import menu from '../assets/icons/horizontalMenu.png';
import verticalMenu from '../assets/icons/verticalMenu.png';
import background from '../assets/icons/bg.jpg';
import rainbow from '../assets/icons/ratingdisabled.png';
import addIcon from '../assets/icons/plus.png';
import pinIcon from '../assets/icons/pin.png';
import logo from '../assets/icons/logo.png';
import rainbowColoured from '../assets/icons/rating.png';
import Colors from './color';

const styles = {
  defaultStyle: {
    height: wp('6%'),
    width: wp('6%'),
    resizeMode: 'contain',
    tintColor: Colors.PrimaryText,
  },
  leftStyle: {
    height: wp('8%'),
    width: wp('8%'),
    resizeMode: 'contain',
    tintColor: Colors.PrimaryText,
  },
  logoStyle: {
    height: wp('13%'),
    width: wp('13%'),
    resizeMode: 'contain',
  },
  addStyle: {
    height: wp('8%'),
    width: wp('8%'),
    resizeMode: 'contain',
    tintColor: '#2F2E2E',
  },
  rainbowStyle: {
    height: wp('15%'),
    width: wp('15%'),
    resizeMode: 'contain',
  },
  pinStyle: {
    height: wp('4%'),
    width: wp('4%'),
    resizeMode: 'contain',
  },
  placesStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
};
const Icons = {
  Down: (style = {}) => (
    <Image source={down} style={{...styles.defaultStyle, ...style}}/>
  ),
  Left: (style = {}) => (
    <Image source={left} style={{...styles.leftStyle, ...style}}/>
  ),
  Right: (style = {}) => (
    <Image source={right} style={{...styles.leftStyle, ...style}}/>
  ),
  Logo: (style = {}) => (
    <Image source={logo} style={{...styles.logoStyle, ...style}}/>
  ),
  AddressPin: (style = {}) => (
    <Image source={pinIcon} style={{...styles.pinStyle, ...style}}/>
  ),
  Menu: (style = {}) => (
    <Image source={menu} style={{...styles.logoStyle, ...style}}/>
  ),
  VerticalMenu: (style = {}) => (
    <Image source={verticalMenu} style={{...styles.logoStyle, ...style}}/>
  ),
  AddIcon: (style = {}) => (
    <Image source={addIcon} style={{...styles.addStyle, ...style}}/>
  ),
  Background: (style = {}) => (
    <Image source={background} style={{...styles.placesStyle, ...style}}/>
  ),
  Rainbow: (style = {}) => (
    <Image source={rainbow} style={{...styles.rainbowStyle, ...style}}/>
  ),
  RainbowColoured: (style = {}) => (
    <Image source={rainbowColoured} style={{...styles.rainbowStyle, ...style}}/>
  ),

};

export default Icons;
