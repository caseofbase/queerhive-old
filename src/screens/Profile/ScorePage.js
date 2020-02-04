import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import ResponsiveText from "../../common/ResponsiveText";
import AppHeader from "../../common/AppHeader";
import Icons from "../../Theme/icons";
import Container from "../../common/Container";
import background from '../../assets/icons/bg.png'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Content from "../../common/Content";
import Fonts from "../../Theme/fonts";

class ScorePage extends Component {
  render(){
    return(
      <Container>
        <AppHeader rightPress={()=>this.props.navigation.navigate('Menu')} left={Icons.Logo()} right={Icons.Menu()}  />
        <Container style={styles.container}
                   backgroundImage={background}>
          <Content>
            <View style={styles.imageContainer}>
              <ResponsiveText style={styles.circleText}>94</ResponsiveText>
            </View>
            <View style={styles.middleContainer}>
                <View>
                  <ResponsiveText style={styles.headerText}>Casey Reid</ResponsiveText>
                  <ResponsiveText style={styles.subTitle}>Bloorcourt Village</ResponsiveText>
                  <ResponsiveText style={styles.subTitle1}>Identifier As: <ResponsiveText style={styles.subTitle}>Queer</ResponsiveText></ResponsiveText>
              </View>
              <View style={styles.placesContainer}>
                <ResponsiveText style={styles.titleText}>Recent Activity</ResponsiveText>
              </View>
              <TouchableOpacity onPress={()=>null}>
                <ResponsiveText style={styles.moreStyle}>More +</ResponsiveText>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.bottomBack}><ResponsiveText style={styles.backTextStyle}>Back</ResponsiveText></TouchableOpacity>

          </Content>
        </Container>
      </Container>
    );
  }
}
export default ScorePage;
const styles = {
  container:{
    flex:1,
    paddingHorizontal:wp('5%')
  },
  middleContainer:{
    marginTop:wp('20%'),
    backgroundColor:'rgba(255,255,255,0.5)',
    borderRadius:wp('2%'),
    paddingHorizontal: wp('3%'),
    paddingTop:wp('30%')
  },
  headerText:{
    fontSize:'8%',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize:'4%',
    paddingVertical:3,
    fontWeight:'300'
  },
  subTitle1: {
    fontSize:'4%',
    paddingVertical:3,
    fontFamily:Fonts.LibreBold
  },
  circleContainer:{
    backgroundColor: '#fff',
    width:wp('17%'),
    height:wp('17%'),
    borderRadius: wp('35%'),
    alignItems:'center',
    justifyContent: 'center',
    elevation: 4
  },
  circleText:{
    fontSize:'18%',
    fontFamily:Fonts.LibreBold,
    textAlign: 'center',
    alignSelf:'center'
  },
  titleText:{
    fontSize:'6%',
    fontFamily:Fonts.LibreBold
  },
  placesContainer:{
    marginTop:wp('5%'),
    height:wp('100%')
  },
  imageContainer:{
    height:wp('35%'),
    width:wp('35%'),
    borderRadius:wp('18%'),
    backgroundColor:'white',
    position:'absolute',
    top:wp('10%'),
    alignSelf:'center',
    zIndex:100,
    elevation:5,
    alignItems:'center',
    justifyContent:'center'
  },
  moreStyle:{
    alignSelf:'flex-end',
    fontFamily:Fonts.LibreBold,
    paddingVertical:10,
    paddingRight: wp('5%'),
    position: 'absolute',
    bottom:0,
    fontSize:'3%'
  },
  bottomBack:{
    alignItems:'center',
    paddingBottom:wp('5%')
  },
  backTextStyle:{
    fontSize:'6%',
    fontWeight: 'bold',
    paddingTop: 10
  },
}
