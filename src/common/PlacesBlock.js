import React from 'react';
import {StyleSheet, TouchableOpacity, TextInput, View,Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ResponsiveText from "./ResponsiveText";
import Fonts from "../Theme/fonts";

export default class PlacesBlock extends React.Component {
  render() {
    return (
        <TouchableOpacity onPress={this.props.onPlacesPress} style={[styles.container, this.props.containerStyle]}>
              <View style={[this.props.IconStyle, styles.IconStyle]}>
                <Image style={styles.imageStyle} source={{uri: this.props.imageUri}} />
              </View>
          <ResponsiveText style={styles.titleStyle}>{this.props.title}</ResponsiveText>
          <ResponsiveText style={styles.subTitleStyle}>{this.props.subTitle}</ResponsiveText>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#E4E0DB',
    // width: wp('20%'),
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#B8B5B2',
    padding:5,
    paddingHorizontal:wp('2%'),
    marginHorizontal:wp('0.5%')
  },
  IconStyle:{
    elevation: 5
  },
  imageStyle:{
    height:wp('17%'),
    width:wp('17%'),
    borderRadius:wp('20%'),
  },
  titleStyle:{
    fontFamily:Fonts.LibreBold
  },
  subTitleStyle:{
    fontSize:wp('0.8%'),
    paddingVertical:3
  }
});
