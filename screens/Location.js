import { StyleSheet, Text, View, Alert, SafeAreaView, ScrollView, ActivityIndicator, Image, TextInput } from 'react-native';
import { Container, Header, Button, Content, Item, Input, Icon } from 'native-base';
import React, { Component } from 'react';
import * as axios from 'axios'

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// ZIP 20.6535474 -103.3093256
// 20.6535284 -103.3094225
const centerPt = {
    latitude: 20.6535474,
    longitude: -103.3093256
}
const threshold = 0.01;


export default class App extends Component {
    state = {
      location: null,
      errorMessage: null,
    };

    static navigationOptions = {
        headerTitle: "Ola anburgesa localizada" ,
        headerLeft: (<Icon style={{ marginLeft: 25 }} type="FontAwesome" name="arrow-left" />),
    };
  
    componentWillMount() {
        this._getLocationAsync();
    }
  
    _getLocationAsync = async () => {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
      }
  
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    };

    isWithinCircle = (checkPoint, centerPoint, km) => {
        var ky = 40000 / 360;
        var kx = Math.cos(Math.PI * centerPoint.latitude / 180.0) * ky;
        var dx = Math.abs(centerPoint.longitude - checkPoint.longitude) * kx;
        var dy = Math.abs(centerPoint.latitude - checkPoint.latitude) * ky;

        console.log(checkPoint.longitude, checkPoint.latitude , centerPoint.longitude, centerPoint.latitude , km, (Math.sqrt(dx * dx + dy * dy) <= km))

        return Math.sqrt(dx * dx + dy * dy) <= km;
    }

    render() {
      let text = 'Waiting..';
      let isInArea = false
      let respuesta = <Text>Afuera del area!!</Text>;

      if (this.state.errorMessage) {
        text = this.state.errorMessage;
      } else if (this.state.location) {
        text = JSON.stringify(this.state.location);
        let location = this.state.location
        isInArea = this.isWithinCircle(location.coords , centerPt , threshold) 

        if (isInArea) {
            respuesta = <Text>Dentro del area!!</Text>
        } else {
            respuesta = <Text>Afuera del area!!</Text>
        }

      }
      
  
      return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>This is you -> {text}</Text>
          <Text style={styles.paragraph}>This is el otro you -> {JSON.stringify(centerPt)}</Text>
          {respuesta}
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      textAlign: 'center',
    },
  });
