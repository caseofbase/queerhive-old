import React from 'react';
import {StyleSheet, TouchableOpacity, TextInput, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../Theme/color';
import ResponsiveText from "./ResponsiveText";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  onFocus() {
    this.setState({active: true});
    if (this.props.onFocus) this.props.onFocus();
  }

  onBlur() {
    this.setState({active: false});
    if (this.props.onBlur) this.props.onBlur();
  }

  render() {
    return (
      <View style={{marginVertical: 10,}}>
        {
          this.props.middleTitle &&
          <ResponsiveText style={styles.middleTitleStyle}>{this.props.middleTitle}</ResponsiveText>
        }
        {
          this.props.leftText &&
          <ResponsiveText style={styles.leftTextStyle}>{this.props.leftText}</ResponsiveText>
        }
      <View style={[styles.container, this.props.containerStyle]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {this.props.leftIcon && (
            <View style={[this.props.leftStyle, styles.leftStyle]}>
              {this.props.leftIcon}
            </View>
          )}
          <TextInput
            onChangeText={this.props.onChangeText}
            style={[styles.inputField, this.props.inputField]}
            placeholder={this.props.placeholder}
            underlineColorAndroid={'transparent'}
            placeholderTextColor={this.props.placeholderTextColor}
            value={this.props.value}
            keyboardType={
              this.props.keyboardType ? this.props.keyboardType : 'default'
            }
            secureTextEntry={
              this.props.secureTextEntry ? this.props.secureTextEntry : false
            }
            multiline={this.props.multiline}
            numberOfLines={this.props.numberOfLines ? 5 : 1}
            onBlur={this.onBlur.bind(this)}
            onFocus={this.onFocus.bind(this)}
            editable={this.props.editable}
            returnKeyType={this.props.search}
            onSubmitEditing={this.props.onSubmit}
          />
          {this.props.right && (
            <TouchableOpacity style={[this.props.rightStyle, styles.rightStyle]}>
              {this.props.right}
            </TouchableOpacity>
          )}
        </View>
      </View>
        {
          this.props.bottomMiddleTitle &&
          <ResponsiveText style={styles.middleBottomTitleStyle}>{this.props.bottomMiddleTitle}</ResponsiveText>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'rgba(255, 255, 255, 0.5)',
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: Colors.PrimaryText,
    borderWidth: 1,
    height: wp('11%'),
  },
  leftStyle: {
    paddingRight: 10,
  },
  inputField: {
    flex: 1,
    width: '100%',
    fontSize: wp('4%'),
    color: Colors.PrimaryText,
  },
  inputLabel: {
    color: '#969696',
    fontSize: wp('20%'),
  },
  rightStyle: {
    marginRight:10
  },
  middleTitleStyle:{
    textAlign: 'center',
    fontSize:wp('1.5%'),
    fontWeight: 'bold'
  },
  leftTextStyle:{
    // fontSize:wp('1%'),
    fontWeight: 'bold',
    color:'#2C2B2C'
  },
  middleBottomTitleStyle:{
    textAlign: 'center',
    fontSize:wp('1%'),
  }
});
