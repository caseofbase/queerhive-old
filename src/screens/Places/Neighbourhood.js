import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import ResponsiveText from "../../common/ResponsiveText";
import AppHeader from "../../common/AppHeader";
import Icons from "../../Theme/icons";
import Container from "../../common/Container";
import background from '../../assets/icons/bg.jpg'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Content from "../../common/Content";
import Colors from "../../Theme/color";
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
const rainbow = require('../../assets/icons/rainbow.png')
class Neighbourhood extends Component {
  constructor(props){
    super(props);
    this.state={
      ratingStatus : 5,
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
    const {ratings , ratingStatus} = this.state
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
                <ResponsiveText style={styles.headerText}>Church St.</ResponsiveText>
              </View>

              <View style={styles.friendsContainer}>
                <ResponsiveText style={styles.ratingText}>Rating</ResponsiveText>
                <View style={{paddingHorizontal:wp('5%'),paddingVertical: 10,width:wp('100%')}}>
                  <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    extraData={this.state}
                    ItemSeparatorComponent = {this.FlatListItemSeparator}
                    data={ratings}
                    renderItem={({item,index}) =>

                      <TouchableOpacity disabled onPress={() => {
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

              <View style={styles.placesContainer}>
                <ResponsiveText style={styles.titleText}>Places</ResponsiveText>
                <FlatList
                  data={PlaceData}
                  renderItem={({ item,index }) =>
                    <View style={{flexDirection: 'row'}}>
                      <EventsBlock onPlacesPress={()=>this.props.navigation.navigate('PlacesDetail')}  titleTextStyle={styles.titleText} subTitle={item.subTitle} title={item.title} imageUri={item.uri} />
                      {
                        index  === PlaceData.length -1 &&
                        <EventsBlock onPlacesPress={()=>this.props.navigation.navigate('EnterAddress')}  plusIcon addText />
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

            </View>
          </Content>
        </Container>
      </Container>
    );
  }
}
export default Neighbourhood;
const styles = {
  container:{
    flex:1,
    paddingHorizontal:wp('5%'),

  },
  middleContainer:{
    marginTop:wp('20%'),
    marginBottom:wp('5%'),
    backgroundColor:'rgba(255,255,255,0.7)',
    borderRadius:wp('2%'),
    paddingHorizontal: wp('3%'),
    paddingTop:wp('25%'),
    paddingBottom: wp('5%')
  },
  infoContainer:{
    alignItems:'center'
  },
  headerText:{
    fontSize:'8.5%',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize:'6%',
    paddingVertical:3,
    fontFamily:Fonts.LibreBold,
    color: Colors.SecondaryText
  },
  subTitle1: {
    fontSize:'4%',
    paddingVertical:3,
    fontFamily:Fonts.LibreBold
  },
  placesContainer:{
    marginVertical:wp('5%')
  },
  titleText:{
    fontSize:'6%',
    fontFamily:Fonts.LibreBold,
    paddingBottom:10
  },
  ratingText:{
    color:Colors.SecondaryText,
    fontSize:'4.5%',
    fontFamily:Fonts.LibreBold
  },
  friendsContainer:{
    marginTop:wp('5%'),
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
  }
}
