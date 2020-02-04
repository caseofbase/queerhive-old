import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import ResponsiveText from "../../common/ResponsiveText";
import AppHeader from "../../common/AppHeader";
import Icons from "../../Theme/icons";
import Container from "../../common/Container";
import background from '../../assets/icons/bg.png'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import InputField from "../../common/InputField";
import Button from "../../common/Button";
import Fonts from "../../Theme/fonts";
class ThankYouScreen extends Component {
  render(){
    return(
      <Container>
        <AppHeader left={Icons.Logo()} right={Icons.Menu()}  />
        <Container overlay style={styles.container}
                   backgroundImage={background}>
          <View style={styles.middleContainer}>
            <ResponsiveText style={styles.titleText}>Thank You!</ResponsiveText>
            {
              Icons.RainbowColoured({width: wp('30%'),height:wp('30%')})
            }
            <ResponsiveText style={{textAlign: 'center',fontFamily:Fonts.LibreBold}}>You have earned +1 point!</ResponsiveText>
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.bottomBack}><ResponsiveText style={styles.backTextStyle}>Back</ResponsiveText></TouchableOpacity>
        </Container>
      </Container>
    );
  }
}
export default ThankYouScreen;
const styles = {
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputStyle:{
    backgroundColor: '#fff',
    borderColor:'#fff',
    height: wp('30%')
  },
  inputFieldStyle:{
    // flex:0,
    // width:wp('50%'),
  },
  middleContainer:{
    elevation:5,
    marginHorizontal:wp('5%'),
    paddingHorizontal:wp('10%'),
    paddingVertical:wp('6%'),
    backgroundColor:'rgba(204,200,203,0.8)',
    borderWidth:1,
    bottom:wp('10%'),
    alignItems: 'center'
  },
  titleText:{
    fontSize: '6%',
    fontWeight: 'bold'
  },
  buttonStyle:{
    width:wp('22%'),
    height:wp('9%'),
    borderColor: '#626060',
    backgroundColor:'#888888',
    alignSelf: 'flex-end',
    marginTop:wp('8%')
  },
  bottomBack:{
    position:'absolute',
    bottom:wp('15%')
  },
  bottomSignUp:{
    // position:'absolute',
    // bottom:wp('15%')
  },
  backTextStyle:{
    fontSize:'5%',
    fontWeight: 'bold'
  }
}
