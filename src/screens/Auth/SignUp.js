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
import AppModal from "../../common/AppModal";
import Fonts from "../../Theme/fonts";
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkModal: false,
      form:true
    };
  }
  checkEmailModal() {
    this.setState({
      checkModal: true,
      form: false
    });
  }
  onTogglePress() {
    this.setState({
      checkModal: false,
      form: true
    });
  }
  render(){
    return(
      <Container>
        <AppHeader left={Icons.Logo()} right={Icons.Menu()}  />
        <Container overlay style={styles.container}
                   backgroundImage={background}>
          {
            this.state.form &&
            <View style={styles.middleContainer}>
              <ResponsiveText style={styles.title}>Sign Up</ResponsiveText>
              <InputField bottomMiddleTitle={'Email'} containerStyle={styles.inputStyle}  inputField={styles.inputFieldStyle} />
              <InputField bottomMiddleTitle={'Password'} containerStyle={styles.inputStyle}  inputField={styles.inputFieldStyle} />
              <Button onPress={this.checkEmailModal.bind(this)} containerStyle={styles.buttonStyle} textStyle={{fontSize:'4%'}}  text={'Submit'} />
            </View>
          }
          {
            this.state.form &&
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={styles.bottomBack}><ResponsiveText style={styles.backTextStyle}>Back</ResponsiveText></TouchableOpacity>
          }
        </Container>

        {/* ----- Modal for Rate ----- */}

        <AppModal
          visible={this.state.checkModal}
          onRequestClose={this.onTogglePress.bind(this)}>
          <View style={styles.middleModalContainer}>
            <ResponsiveText style={styles.titleText}>Check your email!</ResponsiveText>
            {
              Icons.RainbowColoured({width: wp('30%'),height:wp('30%')})
            }
            <ResponsiveText style={{textAlign: 'center',fontFamily:Fonts.LibreBold}}>An email confirmation has been {`\n`} sent your way.</ResponsiveText>
          </View>
        </AppModal>

      </Container>
    );
  }
}
export default SignUp;
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
    width:wp('55%')
  },
  middleContainer:{
    elevation:5,
    paddingHorizontal:wp('10%'),
    paddingVertical:wp('6%'),
    backgroundColor:'rgba(204,200,203,0.8)',
    borderWidth:1,
    bottom:wp('10%')
  },
  title:{
    fontSize:'5.5%',
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
  bottomSignUp:{
    // position:'absolute',
    // bottom:wp('15%')
  },
  backTextStyle:{
    fontSize:'6%',
    fontWeight: 'bold'
  },
  middleModalContainer:{
    elevation:5,
    top:wp('5%'),
    marginHorizontal:wp('5%'),
    paddingHorizontal:wp('5%'),
    paddingVertical:wp('6%'),
    backgroundColor:'rgba(204,200,203,0.8)',
    borderWidth:1,
    // bottom:wp('10%'),
    alignItems: 'center'
  },
  titleText:{
    fontSize: '6%',
    fontWeight: 'bold'
  },
}
