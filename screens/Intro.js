import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';

import AppNavigator from '../navigation/AppNavigator';

import AppIntroSlider from 'react-native-app-intro-slider';

export default class Intro extends React.Component {
  _onDone = () => {
    this.props.navigation.navigate('Main');
  }

  render() {
    return (
      <AppIntroSlider
        onDone={this._onDone}
        slides={slides}
        bottomButton
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  },
});

  const slides = [
    {
      key: 'somethun',
      title: 'Only Once',
      text: 'It\'s true.\nYou only live once.',
      image: require('../assets/1.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Don\'t waste your time... ',
      text: 'We will help you make the most of it!',
      image: require('../assets/2.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Are you ready to reclaim your life?',
      text: 'You can be just like him.\nEnjoying every moment.\nLet\'s create your dreams!',
      image: require('../assets/3.jpg'),
      imageStyle: styles.image,
      backgroundColor: '#22bcb5',
    }
  ];