import React from 'react';
import {TouchableOpacity, View, ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ResponsiveText from './ResponsiveText';
import Color from '../Theme/color';

export default class Button extends React.Component {
  render() {
    const fontSize =
      this.props.textStyle && this.props.textStyle.fontSize
        ? this.props.textStyle.fontSize
        : undefined;
    return (
      <TouchableOpacity
        disabled={this.props.loading || this.props.disabled}
        onPress={this.props.onPress}
        style={[styles.ButtonStyle, this.props.containerStyle]}>
        {this.props.leftIcon && (
          <View style={[styles.leftStyle, this.props.leftIconStyle]}>
            {this.props.leftIcon}
          </View>
        )}
        {(this.props.loading && (
          <ActivityIndicator size={'small'} color={'#fff'} />
        )) ||
          (this.props.text && (
            <ResponsiveText style={{...this.props.textStyle}}>
              {this.props.text}
            </ResponsiveText>
          ))}
        {this.props.right && (
          <View style={[styles.leftStyle, this.props.rightIconStyle]}>
            {this.props.right}
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = {
  ButtonStyle: {
    // height: wp('10%'),
    width:wp('35%'),
    borderWidth: 1,
    borderColor: Color.PrimaryText,
    // marginVertical: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(203,199,203,0.8)',
    borderRadius: wp('2.5%'),
  },
};
