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
import Fonts from "../../Theme/fonts";

const PlaceData = [
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyy',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
  {title:'O garyyas',subTitle:'curuhuh',uri:'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
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
]

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      stepIndex: 0
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
  render(){
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
              <View>
            <ResponsiveText style={styles.headerText}>Casey Reid</ResponsiveText>
            <ResponsiveText style={styles.subTitle}>Bloorcourt Village</ResponsiveText>
            <ResponsiveText style={styles.subTitle1}>Identifier As: <ResponsiveText style={styles.subTitle}>Queer</ResponsiveText></ResponsiveText>
              </View>
              <View style={styles.rightContainer}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('ScorePage')} style={styles.circleContainer}>
                  <ResponsiveText style={styles.circleText}>94</ResponsiveText>
                </TouchableOpacity>
                <ResponsiveText style={{fontFamily:Fonts.LibreBold}}>Score</ResponsiveText>
              </View>
            </View>
            <View style={styles.placesContainer}>
              <ResponsiveText style={styles.titleText}>Places I Like</ResponsiveText>
              <View style={styles.flatListContainer}>
                <TouchableOpacity onPress={this.previousStep.bind(this)}>{Icons.Left()}</TouchableOpacity>
                <FlatList
                showsHorizontalScrollIndicator={false}
                ref={(ref) => { this.flatListRef = ref; }}
                horizontal
                pagingEnabled={true}
                data={PlaceData}
                renderItem={({ item }) =>
                  <PlacesBlock onPlacesPress={()=>this.props.navigation.navigate('PlacesDetail')}  title={item.title} subTitle={item.subTitle} imageUri={item.uri} />
                }
                keyExtractor={item => item.id}
              />
              <TouchableOpacity onPress={this.nextStep.bind(this)}>{Icons.Right()}</TouchableOpacity>
              </View>
            </View>
            <View style={styles.friendsContainer}>
              <ResponsiveText style={styles.titleText}>Friends <ResponsiveText style={{fontSize:'4%',color:'#2A2A29'}}>(27)</ResponsiveText></ResponsiveText>
              <FlatList
                // showsHorizontalScrollIndicator={false}
                // horizontal
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                data={friendsData}
                renderItem={({ item }) =>
                  <View style={styles.friendsItem} />
                }
                keyExtractor={item => item.id}
                numColumns={4}
              />
              <TouchableOpacity>
              <ResponsiveText style={styles.moreButton}>More +</ResponsiveText>
              </TouchableOpacity>
            </View>
          </View>

          </Content>
        </Container>
      </Container>
    );
  }
}
export default Profile;
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
    paddingTop:wp('30%'),
    marginBottom:wp('5%')
  },
  infoContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
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
    width:wp('20%'),
    height:wp('20%'),
    borderRadius: wp('35%'),
    alignItems:'center',
    justifyContent: 'center',
    elevation: 4
  },
  circleText:{
    fontSize:'9%',
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
  placesContainer:{
    marginTop:wp('5%')
  },
  friendsContainer:{
    marginTop:wp('5%'),

  },
  friendsItem:{
    width: wp('17%'),
    height: wp('17%'),
    borderRadius: wp('10%'),
    backgroundColor:'#fff',
    elevation: 3,
    marginVertical: wp('3%'),
    marginHorizontal: wp('1.5%')
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
  },
  moreButton:{
    alignSelf:'flex-end',
    paddingTop:10,
    paddingBottom:wp('5%'),
    paddingRight: wp('5%'),
    fontSize:'3%',
    fontFamily:Fonts.LibreBold
  }
}
