import React,{Component} from 'react';
import {View,StyleSheet,TouchableOpacity,FlatList} from 'react-native';
import ResponsiveText from "../common/ResponsiveText";
import AppHeader from "../common/AppHeader";
import Icons from "../Theme/icons";
import Container from "../common/Container";
import background from '../assets/icons/bg.png'
import Content from "../common/Content";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import InputField from "../common/InputField";
import Button from "../common/Button";
import Fonts from "../Theme/fonts";

const listItems = [
  {name:'Annex'},
  {name:'Annex and Lawrence'},
  {name:'Baldwin Village'},
  {name:'Beaches'},
  {name:'Blooe West'},
  {name:'Cabbagetown'},
  {name:'Church St.'},
  {name:'Danforth'},
]
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      showList : true
    }
  }
  render(){
    return(
      <Container>
        <AppHeader rightPress={()=>this.props.navigation.navigate('Menu')} left={Icons.Logo()} right={Icons.Menu()}  />
        <Container overlay style={styles.container}
                   backgroundImage={background}>
          {
            this.state.showList &&
            <View style={styles.topContainer}>
              <ResponsiveText style={styles.title}>Queer Hive</ResponsiveText>
              <ResponsiveText style={styles.subTitle}>Toronto</ResponsiveText>
            </View>
          }

          <View style={styles.midContainer}>
            {
              this.state.showList &&
              <View>
                <ResponsiveText style={styles.titleText}>Neighbourhood</ResponsiveText>
                <TouchableOpacity onPress={()=> this.setState({showList: false})} style={styles.dropdownListContainer}>
                  {
                    Icons.Left({alignSelf:'flex-end',marginRight:5})
                  }
                </TouchableOpacity>
              </View>
              ||
                <View style={styles.viewedContainer}>
                  <ResponsiveText style={styles.titleText}>Neighbourhood</ResponsiveText>
              <View style={styles.dropDownList}>
                <View style={styles.itemContainer}>
                  <FlatList
                    data={listItems}
                    style={{height:wp('70%')}}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) =>
                      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Neighbourhood')}><ResponsiveText style={styles.listText}>{item.name}</ResponsiveText></TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                  />

                </View>
                <TouchableOpacity onPress={()=> this.setState({showList: true})}>
                {
                  Icons.Down({marginRight:15,alignSelf:'center',marginTop:10})
                }
                </TouchableOpacity>
              </View>
                </View>
            }

          </View>
          {
            this.state.showList &&
            <View style={styles.bottomContainer}>
              <Button onPress={()=>this.props.navigation.navigate('SignIn')} textStyle={styles.signText}  text={'Sign In'}/>
              <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')} style={styles.signUpStyle}><ResponsiveText style={{fontSize:'5.5%'}}>Sign up</ResponsiveText></TouchableOpacity>
            </View>
          }

        </Container>
      </Container>
    );
  }
}
export default Home;
const styles = {
  container:{
    flex:1,
    paddingVertical:wp('5%'),
    flexDirection:'column',
 //    flex:1,
    justifyContent:'space-between'
  },
  topContainer:{
    // flex:1,
    height:'33.33%',
    alignItems:'center',
    // paddingVertical: wp('2%')
  },
  title:{
    fontSize:'10%',
    fontFamily:Fonts.TitanRegular,
    letterSpacing: 2
  },
  subTitle:{
    fontSize:'8%',
    fontFamily:Fonts.LibreBold
  },
  midContainer:{
    paddingHorizontal: wp('5%'),
    // flex:1,
    height:'33.33%',
    justifyContent:'center',
  },
  bottomContainer:{
    justifyContent:'flex-end',
    height:'33.33%',
    alignItems:'center',
  },
  textStyle:{
    fontSize: '7%'
  },
  dropDownList:{
    flexDirection: 'row',
    justifyContent:'space-between',
    borderWidth:1,
    backgroundColor:'rgba(203,199,203,0.8)'
  },
  itemContainer:{
    paddingTop:wp('8%'),
    paddingHorizontal: wp('3%')
  },
  listText:{
    fontSize:'6%',
  },
  dropdownListContainer:{
    borderWidth: 1,
    backgroundColor:'rgba(203,199,203,0.8)',
    height:wp('11%'),
    alignItems:'center',
    justifyContent:'center'
  },
  titleText:{
    fontSize:'5.5%',
    fontFamily:Fonts.LibreBold,
    alignSelf: 'center'
  },
  viewedContainer:{
    top:wp('70%')
  },
  signText:{
    fontSize:'5.5%',
    alignSelf: 'center',
    paddingVertical:5,
  }
}
