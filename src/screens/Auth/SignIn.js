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
class SignIn extends Component {
  render(){
    return(
      <Container>
        <AppHeader rightPress={()=>this.props.navigation.navigate('Menu')} left={Icons.Logo()} right={Icons.Menu()}  />
        <Container overlay style={styles.container}
                   backgroundImage={background}>
          <View style={styles.middleContainer}>
            <ResponsiveText style={styles.title}>Login</ResponsiveText>
            <InputField bottomMiddleTitle={'Username'} containerStyle={styles.inputStyle}  inputField={styles.inputFieldStyle} />
            <InputField bottomMiddleTitle={'Password'} containerStyle={styles.inputStyle}  inputField={styles.inputFieldStyle} />
            <Button onPress={()=>this.props.navigation.navigate('Profile')} containerStyle={styles.buttonStyle} textStyle={{fontSize:'4%'}}  text={'Submit'} />
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')} style={styles.bottomSignUp}>
            <ResponsiveText style={styles.signUpTextStyle}>Sign up</ResponsiveText></TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={styles.bottomBack}>
            <ResponsiveText style={styles.backTextStyle}>Back</ResponsiveText></TouchableOpacity>
        </Container>
      </Container>
    );
  }
}
export default SignIn;
const styles = {
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputStyle:{
    backgroundColor: '#fff',
    borderColor:'#fff',
    height:wp('8%')
  },
  inputFieldStyle:{
    flex:0,
    width:wp('55%'),
  },
  middleContainer:{
    elevation:5,
    paddingHorizontal:wp('10%'),
    paddingVertical:wp('6%'),
    backgroundColor:'rgba(203,199,203,0.8)',
    borderWidth:1,
    // bottom:wp('10%')
  },
  title:{
    fontSize:'5%',
    fontWeight: 'bold',
    paddingBottom:wp('2%'),
    textAlign: 'center'
  },
  buttonStyle:{
    width:wp('20%'),
    height:wp('8%'),
    borderColor: '#626060',
    backgroundColor:'#888888',
    alignSelf: 'flex-end',
    marginTop:wp('8%')
  },
  bottomBack:{
    position:'absolute',
    bottom:wp('10%')
  },
  backTextStyle:{
    fontSize:'6%',
    fontWeight: 'bold'
  },
  signUpTextStyle:{
    fontSize:'6%',
  }
}
