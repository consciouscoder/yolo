import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Easing,
  Alert
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

import { Header, Button, Card } from 'react-native-elements';
import PercentageCircle from 'react-native-percentage-circle';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const MAX_POINTS = 500;

export default class HomeScreen extends React.Component {

  state = {
    isMoving: false,
    pointsDelta: 0,
    points: 325,
    fill: 15
  };

  static navigationOptions = {
    header: null,
  };

  render() {
    const fill = this.state.points / MAX_POINTS * 100;

    return (
      
      <View style={styles.container}>

      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Only Once', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        
        <View style={styles.getStartedContainer}>
          <Card
            title='TIME SPENT TODAY'>
            <Text style={{marginBottom: 10}}>
              This is your time spent today.
            </Text>
            
          <View style={styles.lifeContainer}>
            <PercentageCircle radius={50} percent={80} color={"#3498db"} borderWidth={10}
            >
            </PercentageCircle>  
          </View>
          </Card>
        </View>   

        <View style={styles.getStartedContainer}>
        <Text>{"\n\n"}</Text>
          <Card
            title='TIME SPENT ON EARTH'>
            <Text style={{marginBottom: 10}}>
              This is your time spent on planet Earth.
            </Text>
            
          <View style={styles.lifeContainer}>
            <PercentageCircle radius={50} percent={53} color={"#3498db"} borderWidth={10}
            >
            </PercentageCircle>  
          </View>
          </Card>
        </View>     

          <View style={styles.getStartedContainer}>
            <Text>{"\n\n\n\n"}</Text>

            <AnimatedCircularProgress
              ref={(ref) => this.circularProgress = ref}
              size={100}
              width={10}
              fill={this.state.fill}
              tintColor="#00e0ff"
              backgroundColor="#3d5875">
              {
                (fill) => (
                  <Text style={styles.points}>
                    { this.state.fill }
                  </Text>
                )
              }
            </AnimatedCircularProgress>
            <Text>{"\n"}</Text>
            <Button large icon={{name: 'envira', type: 'font-awesome'}} title="Redraw Circle"
                    onPress={() => { this.circularProgress.animate(0, 1000, Easing.quad); this.circularProgress.animate(100, 8000, Easing.quad) }}
            /> 
            <Text>{"\n"}</Text>
          </View>


        </ScrollView>

      </View>
    );
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  lifeContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
