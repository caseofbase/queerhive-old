import React from 'react';
import {SafeAreaView, Image, Dimensions, StatusBar, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../Theme/color';

export default class Container extends React.Component {
  render() {
    const {statusBarColor, backgroundImageStyle} = this.props;
    let color = statusBarColor ? statusBarColor : Colors.Background;
    let barStyle = this.props.barStyle ? this.props.barStyle : 'light-content';
    return (
      <SafeAreaView style={[styles.container, this.props.style]}>
        <StatusBar backgroundColor={color} barStyle={barStyle} />
        {this.props.backgroundImage && (
          <Image
            source={this.props.backgroundImage}
            style={[styles.backgroundImage, backgroundImageStyle]}
          />
        )}
        {this.props.overlay && <View style={styles.overlayStyle} />}
        {this.props.children}
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  backgroundImage: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  overlayStyle: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
};
