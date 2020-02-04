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
class AddAccessibility extends Component {
  render(){
    return(
      <Container>
        <AppHeader left={Icons.Logo()} right={Icons.Menu()}  />
        <Container overlay style={styles.container}
                   backgroundImage={background}>
          <View style={styles.middleContainer}>
            <InputField middleTitle={'Enter Accessibility'} containerStyle={styles.inputStyle}  inputField={styles.inputFieldStyle} />
            <ResponsiveText style={{textAlign: 'center',fontSize:'3.5%'}}>Hit <ResponsiveText style={{fontWeight: 'bold'}}>enter</ResponsiveText> to add multiple tags {`\n`} Tags can be identity, location or theme based</ResponsiveText>
            <Button onPress={()=>this.props.navigation.navigate('ThankYouScreen')} containerStyle={styles.buttonStyle} textStyle={{fontSize:'4%'}}  text={'Submit'} />
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.bottomBack}><ResponsiveText style={styles.backTextStyle}>Back</ResponsiveText></TouchableOpacity>
        </Container>
      </Container>
    );
  }
}
export default AddAccessibility;
const styles = {
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputStyle:{
    backgroundColor: '#fff',
    borderColor:'#fff',
    height: wp('20%')
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
    width: wp('80%')

  },
  buttonStyle:{
    width:wp('20%'),
    height:wp('7%'),
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
