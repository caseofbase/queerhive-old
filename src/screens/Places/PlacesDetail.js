import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity,Image,FlatList} from 'react-native';
import ResponsiveText from "../../common/ResponsiveText";
import AppHeader from "../../common/AppHeader";
import Icons from "../../Theme/icons";
import Container from "../../common/Container";
import background from '../../assets/icons/bg.png'
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import Content from "../../common/Content";
import PlacesBlock from "../../common/PlacesBlock";
import Colors from "../../Theme/color";
import {Rating} from "react-native-ratings";
import Fonts from "../../Theme/fonts";

const PlaceData = [
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
];
const tagsData = [
  {tagName:'Lesbian'},
  {tagName:'Gay'},
  {tagName:'East End'},
  {tagName:'Queer'},
];
const accessibilityData = [
  {tagName:'Wheelchair Accessible'},
  {tagName:'Gender Neutral Bathroom'},
];
const commentsData = [
  {title:'James Bond',description:'This is a chruch street mainstay with lota of queer events and somthing gay every day of the week.'},
  {title:'James Lond',description:'This is a chruch street mainstay with lota of queer events and somthing gay every day of the week.'},
];
const friendsData = [
  {id:1},
  {id:2},
  {id:3},
  {id:4},
  {id:5},
  {id:6},
  {id:7},
  {id:8},
  {id:9},
  {id:10},
  {id:11},
  {id:12},
];
const rainbow = require('../../assets/icons/rainbow.png')
class PlacesDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stepIndex: 0,
      initialStar : 0,
      ratingStatus : 5,
      ratings:[
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
      ],
    }

    this.currentStepIndex = 0;

    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);

    console.log('State: ', this.state);
  }
  nextStep() {
    console.log('next tapped...')

    if (this.currentStepIndex < PlaceData.length - 1) {
      this.currentStepIndex = this.currentStepIndex + 1;
      this.flatListRef.scrollToIndex({index: this.currentStepIndex, animated: true});

      this.setState (
        {
          stepIndex: this.currentStepIndex
        }
      )
    }
  }

  previousStep () {
    console.log('prev tapped...')
    if (this.currentStepIndex > 0) {
      this.currentStepIndex = this.currentStepIndex - 1;
      this.flatListRef.scrollToIndex({index: this.currentStepIndex, animated: true});
      this.setState (
        {
          stepIndex: this.currentStepIndex
        }
      )
    }
  }
  ratingCompleted = (rating) => {
    console.warn("Rating is: " + rating);
    this.props.navigation.navigate('ThankYouScreen')
  };
  render(){
    const { ratings ,ratingStatus} = this.state;
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
                  <ResponsiveText style={styles.headerText}>O'Grady's</ResponsiveText>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Neighbourhood')}><ResponsiveText style={styles.subTitle}>Church St</ResponsiveText></TouchableOpacity>
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
              <View style={styles.friendsContainer}>
                <ResponsiveText style={styles.titleText}>Tags</ResponsiveText>
                <View style={styles.tagInsideContainer}>
                <FlatList
                  ItemSeparatorComponent = {this.FlatListItemSeparator}
                  data={tagsData}
                  renderItem={({ item }) =>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('TagScreen')} style={styles.tagsItems}><ResponsiveText style={styles.tagsItemText}>{item.tagName}</ResponsiveText></TouchableOpacity>
                  }
                  keyExtractor={item => item.id}
                  numColumns={3}
                />
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddTag')}><ResponsiveText style={styles.tagsAdd}>Add+</ResponsiveText></TouchableOpacity>
                </View>
              </View>
              <View style={styles.friendsContainer}>
                <ResponsiveText style={styles.titleText}>Accessibility</ResponsiveText>
                <View style={styles.tagInsideContainer}>
                <FlatList
                  ItemSeparatorComponent = {this.FlatListItemSeparator}
                  data={accessibilityData}
                  renderItem={({ item }) =>
                    <TouchableOpacity style={styles.accessibilityItems}><ResponsiveText style={styles.tagsItemText}>{item.tagName}</ResponsiveText></TouchableOpacity>
                  }
                  keyExtractor={item => item.id}
                  numColumns={1}
                />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AddAccessibility')}}><ResponsiveText style={styles.tagsAdd}>Add+</ResponsiveText></TouchableOpacity>
                </View>
              </View>
              <View style={styles.friendsContainer}>
                <ResponsiveText style={styles.titleText}>Comments <ResponsiveText style={{fontSize:'4%',color:'#2A2A29'}}>(3)</ResponsiveText></ResponsiveText>
                <FlatList
                  ItemSeparatorComponent = {this.FlatListItemSeparator}
                  data={commentsData}
                  renderItem={({ item }) =>
                    <View style={styles.commentsItemContainer}>
                      <ResponsiveText style={styles.commentsTitle}>{item.title}</ResponsiveText>
                      <ResponsiveText style={styles.descriptionText}>{item.description}</ResponsiveText>
                    </View>                  }
                  keyExtractor={item => item.id}
                  numColumns={1}
                />
                <TouchableOpacity onPress={()=>null}>
                  <ResponsiveText style={{alignSelf:'flex-end',paddingVertical:10,fontFamily:Fonts.LibreBold,fontSize:'3.5%'}}>More ></ResponsiveText>
                </TouchableOpacity>
              </View>
              <View style={styles.placesContainer}>
                <ResponsiveText style={styles.titleText}>Upcoming Events</ResponsiveText>
                <View style={styles.flatListContainer}>
                  <TouchableOpacity onPress={this.previousStep.bind(this)}>{Icons.Left()}</TouchableOpacity>
                <FlatList
                  ref={(ref) => { this.flatListRef = ref; }}
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  data={PlaceData}
                  renderItem={({ item }) =>
                    <PlacesBlock title={item.title} subTitle={item.subTitle} imageUri={item.uri} />
                  }
                  keyExtractor={item => item.id}
                 />
                  <TouchableOpacity onPress={this.nextStep.bind(this)}>{Icons.Right()}</TouchableOpacity>
                </View>
              </View>
            </View>
          </Content>
        </Container>
      </Container>
    );
  }
}
export default PlacesDetail;
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
    paddingTop:wp('25%'),
    marginBottom: wp('5%')
  },
  infoContainer:{
    alignItems:'center'
  },
  headerText:{
    fontSize:'8%',
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
    fontSize:'8%',
    fontFamily:Fonts.LibreBold,
    textAlign: 'center',
    alignSelf:'center'
  },
  rightContainer:{
    alignItems: 'center',
    justifyContent:'center',
    paddingRight:wp('5%')
  },
  titleText:{
    fontSize:'6%',
    fontFamily:Fonts.LibreBold
  },
  ratingText:{
    color:Colors.SecondaryText,
    fontSize:'4%',
    fontFamily:Fonts.LibreBold
  },
  tagsItems:{
    backgroundColor:'#6A6A6A',
    borderRadius:wp('4%'),
    marginRight:wp('2%'),
    marginVertical:wp('2%')
  },
  accessibilityItems:{
    backgroundColor:'#6A6A6A',
    borderRadius:wp('4%'),
    marginRight:wp('15%'),
    marginVertical:wp('2%')
  },
  tagsItemText:{
    flex:1,
    color:Colors.Primary,
    paddingHorizontal:wp('5%'),
    paddingVertical:3,
    fontSize:'4%'
  },
  tagInsideContainer:{
    flexDirection:'row',justifyContent:'space-between',alignItems:'center'
  },
  placesContainer:{
    marginBottom:wp('5%')
  },
  tagsAdd:{
    fontFamily:Fonts.LibreBold,
    fontSize:'3.5%'
  },
  commentsItemContainer:{
    borderWidth:1,
    borderColor:'#8D8E8C',
    backgroundColor:'rgba(214,215,214,0.8)',
    paddingHorizontal:5,
    paddingVertical:5,
    marginVertical:5
  },
  commentsTitle:{
    fontFamily:Fonts.LibreBold,
    paddingBottom:5
  },
  descriptionText:{
    fontSize:'3.3%',
    lineHeight:20
  },
  friendsContainer:{
    marginTop:wp('2%'),
  },
  friendsItem:{
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('10%'),
    backgroundColor:'#fff',
    elevation: 3,
    marginVertical: wp('3%'),
    marginHorizontal: wp('1%')
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
  flatListContainer:{
    flexDirection: 'row',
    alignItems:'center',
    // width:wp('90%'),
    paddingHorizontal:0
  }
};


{/*<TouchableOpacity onPress={() => {*/}
{/*  const {ratings} = this.state;*/}
{/*  let indexOfItem = ratings.indexOf(item)*/}
{/*  for (let i=0;i<=indexOfItem;i++){*/}
{/*    ratings[i].liked = true;*/}
{/*  }*/}
{/*  console.warn(item.id)*/}
{/*  this.setState({ratings})*/}
{/*}}>*/}
