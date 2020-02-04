import React,{Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, PermissionsAndroid} from 'react-native';
import ResponsiveText from "../../common/ResponsiveText";
import AppHeader from "../../common/AppHeader";
import Icons from "../../Theme/icons";
import Container from "../../common/Container";
import background from '../../assets/icons/bg.jpg'
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";
import Geolocation from 'react-native-geolocation-service';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {check, PERMISSIONS, RESULTS,request} from 'react-native-permissions';
import Fonts from "../../Theme/fonts";
const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
class FindMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0,
      },
      userLocation: {},
      viewport: {
        latitude: 42.430472,
        longitude: -123.334102,
        zoom: 16,
      },
      loading: false,
    };
  }
  async componentDidMount() {
    let permission =
      Platform.OS === 'android'
        ? await this.requestLocationPermissionAndroid()
        : true;
    if (permission) {
      this.setState({loading: true});
      Geolocation.getCurrentPosition(
        position => {
          let lat = parseFloat(position.coords.latitude);
          let long = parseFloat(position.coords.longitude);

          let initialRegion = {
            latitude: lat,
            longitude: long,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          };

          this.setState({initialPosition: initialRegion, loading: false});
          this.setState({markerPosition: initialRegion});
        },
        error => {
          console.warn(error);
        }
      );
    }
  }
  async requestLocationPermissionAndroid() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.warn(err);
    }
  }

  render(){
    return(
      <Container>
        <AppHeader rightPress={()=>this.props.navigation.goBack()} left={Icons.Logo()} right={Icons.Menu()}  />
        <Container style={styles.container}
                   backgroundImage={background}>
          <ResponsiveText style={styles.titleText}>Find Me</ResponsiveText>
              <View style={styles.topContainer}>
                <MapView
                  provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                  style={styles.map}
                  region={this.state.initialPosition}>
                  <Marker coordinate={this.state.markerPosition} />
                </MapView>
              </View>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Menu')} style={styles.bottomBack}><ResponsiveText style={styles.backTextStyle}>Back</ResponsiveText></TouchableOpacity>

        </Container>
      </Container>
    );
  }
}
export default FindMe;
const styles = {
  map: {
    width: wp('80%'),
    height: hp('60%'),
  },
  container:{
    flex:1,
    paddingLeft:wp('5%'),
    paddingTop:wp('5%')
  },
  topContainer:{
    elevation:5,
    backgroundColor:'rgba(255,255,255,0.7)',
    width:wp('50%'),
  },
  titleText:{
    fontSize:'7%',
    fontFamily:Fonts.LibreBold,
    paddingVertical:5
  },
  bottomBack:{
    alignSelf: 'center',
    position:'absolute',
    bottom:wp('10%')
  },
  backTextStyle:{
    fontSize:'5%',
    fontWeight: 'bold'
  },
}
