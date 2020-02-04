import React from 'react';
import {StyleSheet, TouchableOpacity, TextInput, View,Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ResponsiveText from "./ResponsiveText";
import Icons from "../Theme/icons";

export default class EventsBlock extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPlacesPress} style={[styles.container, this.props.containerStyle]}>
        {
          this.props.imageUri &&
          <View style={[this.props.IconStyle, styles.IconStyle]}>
            <Image style={styles.imageStyle} source={{uri: this.props.imageUri}} />
          </View>
        }
        {
          this.props.plusIcon &&
          <View style={[this.props.addContainerStyle, styles.addContainerStyle]}>
            {Icons.AddIcon()}
          </View>
        }
        {
          this.props.title &&
          <ResponsiveText style={styles.titleStyle}>{this.props.title}</ResponsiveText>
        }
        {
          this.props.subTitle &&
            <ResponsiveText style={styles.subTitleStyle}>{this.props.subTitle}</ResponsiveText>
        }
        {
          this.props.addText &&
          <ResponsiveText style={styles.titleStyle}>Add Place</ResponsiveText>
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    backgroundColor:'rgba(255,255,255,0.7)',
    width: wp('20%'),
    alignItems:'center',
    justifyContent:'center',
    borderWidth:1,
    borderColor:'#B8B5B2',
    padding:5,
    marginHorizontal:wp('0.5%'),
    marginVertical:wp('0.5%'),
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
    fontSize:wp('1%'),
    flex:1,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf:'center',
    paddingVertical:5
  },
  addContainerStyle:{
    elevation: 5,
    height:wp('17%'),
    width:wp('17%'),
    borderRadius:wp('20%'),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  subTitleStyle:{
    textAlign: 'center',
    fontSize: wp('0.9%')
  }
});
