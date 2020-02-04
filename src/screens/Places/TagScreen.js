import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import ResponsiveText from "../../common/ResponsiveText";
import AppHeader from "../../common/AppHeader";
import Icons from "../../Theme/icons";
import Container from "../../common/Container";
import background from '../../assets/icons/bg.jpg'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Content from "../../common/Content";
import PlacesBlock from "../../common/PlacesBlock";
import Colors from "../../Theme/color";
import {Rating} from "react-native-ratings";
import EventsBlock from "../../common/EventsBlock";
import Fonts from "../../Theme/fonts";

const PlaceData = [
  {title:'ODradys',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'Crews & Tangos',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'Smith',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'The 519',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'ODradys',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'Crews & Tangos',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'Smith',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'The 519',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'ODradys',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'Crews & Tangos',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'Smith',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'The 519',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'Crews',subTitle:'church St',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'Smith',subTitle:'Dudoos W',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'The 519',subTitle:'Church',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
];
const tagsData = [
  {tagName:'Lesbian'},
  {tagName:'Gay'},
  {tagName:'East End'},
];
class TagScreen extends Component {
  render(){
    return(
      <Container>
        <AppHeader rightPress={()=>this.props.navigation.navigate('Menu')} left={Icons.Logo()} right={Icons.Menu()}  />
        <Container style={styles.container}
                   backgroundImage={background}>
          <Content>
            <View style={styles.middleContainer}>
              <View style={styles.infoContainer}>
                <ResponsiveText style={styles.headerText}>Tag: <ResponsiveText style={styles.subTitle}>Lesbian</ResponsiveText></ResponsiveText>
              </View>
              <View style={styles.placesContainer}>
                <ResponsiveText style={styles.titleText}>Places</ResponsiveText>
                <FlatList
                  data={PlaceData}
                  renderItem={({ item,index }) =>
                        <View style={{flexDirection: 'row'}}>
                          <EventsBlock titleTextStyle={styles.titleText} subTitle={item.subTitle} title={item.title} imageUri={item.uri} />
                          {
                            index  === PlaceData.length -1 &&
                            <EventsBlock plusIcon addText />
                          }
                        </View>
                    }
                  keyExtractor={item => item.id}
                  numColumns={4}
                />
                <TouchableOpacity onPress={()=>null}>
                  <ResponsiveText style={{alignSelf:'flex-end',paddingVertical:10,fontFamily:Fonts.LibreBold,paddingRight:5,fontSize:'3%'}}>More +</ResponsiveText>
                </TouchableOpacity>
              </View>

              <View>
                  <ResponsiveText style={styles.titleText}>Other Tags</ResponsiveText>
                  <FlatList
                    data={tagsData}
                    renderItem={({ item }) =>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('TagScreen')} style={styles.tagsItems}><ResponsiveText style={styles.tagsItemText}>{item.tagName}</ResponsiveText></TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                    numColumns={3}
                  />
                </View>
              <TouchableOpacity onPress={()=>this.props.navigation.goBack()}><ResponsiveText style={styles.backText}>Back</ResponsiveText></TouchableOpacity>
            </View>
          </Content>
        </Container>
      </Container>
    );
  }
}
export default TagScreen;
const styles = {
  container:{
    flex:1,
    paddingHorizontal:wp('5%')
  },
  middleContainer:{
    marginTop:wp('10%'),
    marginBottom:wp('5%'),
    backgroundColor:'rgba(255,255,255,0.7)',
    borderRadius:wp('2%'),
    paddingHorizontal: wp('3%'),
    paddingTop:wp('5%')
  },
  infoContainer:{
    alignItems:'center',
  },
  headerText:{
    fontSize:'8%',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize:'8%',
    fontWeight:'100',
    paddingVertical:3,
  },
  imageContainer:{
    position:'absolute',
    top:wp('10%'),
    alignSelf:'center',
    zIndex:100,
    elevation:5
  },
  placesContainer:{
    marginVertical:wp('5%')
  },
  titleText:{
    fontSize:'6%',
    fontFamily:Fonts.LibreBold,
    paddingBottom:10
  },
  backText:{
    fontSize:'5.5%',
    fontFamily:Fonts.LibreBold,
    paddingVertical:10,
    textAlign: 'center'
  },
  footerStyle:{
    flexDirection:'row'
  },
  tagsItems:{
    backgroundColor:'#6A6A6A',
    borderRadius:wp('4%'),
    marginRight:wp('2%'),
    marginVertical:wp('2%')
  },
  tagsItemText:{
    flex:1,
    color:Colors.Primary,
    paddingHorizontal:wp('5%'),
    paddingVertical:3,
    fontSize:'4%'
  },
}
