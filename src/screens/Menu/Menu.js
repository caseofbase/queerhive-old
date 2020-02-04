import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import ResponsiveText from "../../common/ResponsiveText";
import AppHeader from "../../common/AppHeader";
import Icons from "../../Theme/icons";
import Container from "../../common/Container";
import background from '../../assets/icons/bg.png'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import AppModal from "../../common/AppModal";
import Button from "../../common/Button";
import Fonts from "../../Theme/fonts";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkModal: false,
      menu:true
    };
  }
  priceModal() {
    this.setState({
      checkModal: true,
      menu: false
    });
  }
  onTogglePress() {
    this.setState({
      checkModal: false,
      menu: true
    });
  }
  onEnterAddress(){
    this.setState({checkModal: false});
    this.props.navigation.navigate('EnterAddress')
  }
  onWhereAm(){
    this.setState({checkModal: false});
    this.props.navigation.navigate('FindMe')
  }
  render(){
    return(
      <Container>
        <AppHeader rightPress={()=>this.props.navigation.goBack()} left={Icons.Logo()} right={Icons.VerticalMenu()}  />
        <Container overlay style={styles.container}
                   backgroundImage={background}>
          {
            this.state.menu &&
            <View style={{alignItems:'flex-end'}}>
              <View style={styles.topContainer}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Profile')}>
                  <ResponsiveText style={styles.listText}>Profile</ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.priceModal.bind(this)}>
                  <ResponsiveText style={styles.listText}>Rate</ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                  <ResponsiveText style={styles.listText}>Find</ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('FindMe')}>
                  <ResponsiveText style={styles.listText}>Right Now</ResponsiveText>
                </TouchableOpacity>
              </View>
            </View>
          }
          {
            this.state.menu &&
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.bottomBack}><ResponsiveText style={styles.backTextStyle}>Back</ResponsiveText></TouchableOpacity>
          }

        </Container>
        {/* ----- Modal for Rate ----- */}

        <AppModal
          visible={this.state.checkModal}
          onRequestClose={this.onTogglePress.bind(this)}>
          <View style={styles.modalContainer}>
            <ResponsiveText style={styles.rateStyle}>Rate</ResponsiveText>
            <View style={styles.buttonContainer}>
            <Button onPress={this.onWhereAm.bind(this)} containerStyle={styles.buttonStyle} textStyle={{fontSize:'4%'}}  text={'Find Where I Am'} />
            <Button onPress={this.onEnterAddress.bind(this)} containerStyle={styles.buttonStyle} textStyle={{fontSize:'4%'}}  text={'Enter Address'} />
            </View>
          </View>
        </AppModal>
      </Container>
    );
  }
}
export default Menu;
const styles = {
  container:{
    flex:1,
  },
  topContainer:{
    alignItems:'flex-end',
    paddingBottom:wp('10%'),
    backgroundColor:'rgba(255,255,255,0.7)',
    width:wp('50%')
  },
  listText:{
    fontSize:'5.5%',
    paddingHorizontal:wp('5%'),
    paddingVertical:wp('3%'),
    fontWeight:'400'
  },
  bottomBack:{
    alignSelf: 'center',
    position:'absolute',
    bottom:wp('10%')
  },
  backTextStyle:{
    fontSize:'5.5%',
    fontWeight: 'bold'
  },
  modalContainer: {
    width: wp('65%'),
    backgroundColor: 'rgba(203,199,203,0.8)',
    padding: 15,
    borderWidth:1,
    alignItems:'center',
    paddingBottom: wp('8%'),
    elevation:3
  },
  buttonStyle:{
    width:wp('40%'),
    height:wp('7%'),
    borderColor: '#626060',
    backgroundColor:'#888888',
    alignSelf: 'center',
    marginVertical:8
  },
  rateStyle:{
    fontWeight: 'bold',
    fontSize:'5.5%'
  },
  buttonContainer:{
    paddingVertical: wp('5%')
  }
}
