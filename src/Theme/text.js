import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ResponsiveText from '../common/ResponsiveText';

const styles = {
  defaultStyle: {
    fontSize: '4.5%',
  },
};

const ItemText = {
  Profile: () => (
    <ResponsiveText style={{...styles.defaultStyle}}>Home</ResponsiveText>
  ),
};

export default ItemText;
