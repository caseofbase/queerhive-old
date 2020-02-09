import React, {Component} from 'react';
import {StatusBar, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Colors from "../Theme/color";

export default class AppHeader extends Component {
  render() {
    return (
      <View style={[styles.customStyle, this.props.containerStyle]}>
        <View style={[styles.left, this.props.leftStyle]}>
          {this.props.left && (
            <TouchableOpacity
              onPress={this.props.leftPress}>
              {this.props.left}
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.body, this.props.bodyStyle]}>
          {this.props.body && this.props.body}
        </View>

        <View style={[styles.right, this.props.rightStyle]}>
          {this.props.right && (
            <TouchableOpacity onPress={this.props.rightPress}>
              {this.props.right}
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}
const styles = {
  customStyle: {
    height: widthPercentageToDP('15%'),
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.Primary,
    paddingHorizontal: 102,
  },
  left: {
    flex: 1,
  },
  body: {
    flex: 2,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    paddingRight: 10,
    alignItems: 'flex-end',
  },
};
