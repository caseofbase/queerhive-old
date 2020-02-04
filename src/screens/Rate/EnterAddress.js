import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import ResponsiveText from "../../common/ResponsiveText";
import AppHeader from "../../common/AppHeader";
import Icons from "../../Theme/icons";
import Container from "../../common/Container";
import background from '../../assets/icons/bg.jpg'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Content from "../../common/Content";
import InputField from "../../common/InputField";
import Button from "../../common/Button";
import {Rating} from "react-native-ratings";
import Fonts from "../../Theme/fonts";

const rainbow = require('../../assets/icons/rainbow.png')

class EnterAddress extends Component {
  constructor(props){
    super(props);
    this.state = {
      ratingStatus : 3,
      ratings:[
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
      ],
    }
}
  render(){
    const {ratings , ratingStatus} = this.state;
    return(
      <Container>
        <AppHeader rightPress={()=>this.props.navigation.navigate('Menu')} left={Icons.Logo()} right={Icons.Menu()}  />
        <Container style={styles.container}
                   backgroundImage={background}>
          <Content>
            <View style={styles.imageContainer}>
              <Image style={styles.profileImageStyle} source={{uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}} />
            </View>
            <View style={styles.middleContainer}>
              <View style={styles.infoContainer}>
                <ResponsiveText style={styles.headerText}>Enter Address</ResponsiveText>
                <InputField inputField={{fontSize:wp('3%'),paddingVertical:0}} containerStyle={{borderColor:'#BFBFBF',height:wp('8%')}} leftText={'Name of Establishment'} />
                <InputField inputField={{fontSize:wp('3%'),paddingVertical:0}} containerStyle={{borderColor:'#BFBFBF',height:wp('8%')}} leftText={'Address'} right={Icons.AddressPin()} />
                <View style={styles.friendsContainer}>
                  <ResponsiveText style={styles.ratingText}>Rating</ResponsiveText>
                  <View style={{paddingHorizontal:wp('5%'),paddingVertical: 10,width:wp('100%')}}>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      extraData={this.state}
                      data={ratings}
                      renderItem={({item,index}) =>

                        <TouchableOpacity onPress={() => {
                          this.setState({ratingStatus : index + 1 })
                        }}>
                          {
                            index < ratingStatus && Icons.RainbowColoured() || Icons.Rainbow()
                          }
                        </TouchableOpacity>
                      }
                      keyExtractor={item => item.id}
                    />
                  </View>
                </View>
                <InputField inputField={{fontSize:wp('3%'),paddingVertical:0}} containerStyle={{borderColor:'#BFBFBF',height:wp('8%')}} leftText={'Tags'} />
                <InputField inputField={{fontSize:wp('3%'),paddingVertical:0}} containerStyle={{borderColor:'#BFBFBF',height:wp('8%')}} leftText={'Accessibility'} />
                <InputField multiline numberOfLines inputField={{textAlignVertical: 'top'}} containerStyle={{height: null,borderColor:'#BFBFBF'}} leftText={'Comment'} />
                <Button onPress={()=>this.props.navigation.navigate('ThankYouScreen')} containerStyle={styles.buttonStyle} textStyle={{fontSize:'4%'}}  text={'Submit'} />
              </View>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={styles.bottomBack}><ResponsiveText style={styles.backTextStyle}>Back</ResponsiveText></TouchableOpacity>
          </Content>
        </Container>
      </Container>
    );
  }
}
export default EnterAddress;
const styles = {
  container:{
    flex:1,
    paddingHorizontal:wp('5%')
  },
  middleContainer:{
    marginTop:wp('20%'),
    // marginBottom:wp('5%'),
    backgroundColor:'rgba(255,255,255,0.7)',
    borderRadius:wp('2%'),
    paddingLeft: wp('3%'),
    paddingRight: wp('10%'),
    paddingTop:wp('25%'),
    paddingBottom: wp('10%')
  },
  infoContainer:{
    marginTop: 10
  },
  headerText:{
    fontSize:'9%',
    fontWeight: 'bold',
  },
  profileImageStyle:{
    height:wp('35%'),
    width:wp('35%'),
    borderRadius:wp('18%'),
  },
  imageContainer:{
    position:'absolute',
    top:wp('10%'),
    alignSelf:'center',
    zIndex:100,
    elevation:5
  },
  buttonStyle:{
    width:wp('20%'),
    height:wp('7%'),
    borderColor: '#626060',
    backgroundColor:'#888888',
    alignSelf: 'flex-end',
    marginTop:wp('4%')
  },
  bottomBack:{
    alignItems:'center',
    paddingBottom:wp('5%')
  },
  backTextStyle:{
    fontSize:'5%',
    fontWeight: 'bold',
  },
  ratingText:{
    fontFamily:Fonts.LibreBold,
    color:'#2C2B2C'
  }
}
