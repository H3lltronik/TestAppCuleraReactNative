import { View, TouchableOpacity, StyleSheet, Platform, StatusBar, Image, ActivityIndicator } from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import { StackActions } from "react-navigation";
import * as Permissions from 'expo-permissions';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import React from 'react';

export default class CameraSicresa extends React.Component {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.front,
    loading: false,
  };

  static navigationOptions = {
      header: null,
  };

  constructor (props) {
      super(props);
  }

  goBack () {
      const popAction = StackActions.pop({n: 1});          
      this.props.navigation.dispatch(popAction);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      this.setState({ loading: true });
      let photo = await this.camera.takePictureAsync({ quality: 1 });
      this.setState({ loading: false });
      
      this.props.navigation.navigate('SicresaImagePreview', { photo })
    }
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={styles.container}>
          { this.state.loading 
            ? <ActivityIndicator style={{position: 'absolute', zIndex: 10, width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.7)'}}></ActivityIndicator>
            : <View></View>
          }
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }} >
            <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>

              <TouchableOpacity style={{position: 'absolute', top: 0, left: 0, marginTop: StatusBar.currentHeight, marginLeft: 30, padding: 5}}
              onPress={ () => { this.goBack() } }>
                  <Ionicons style={{  }} name="ios-close" size={35} color="white" />
              </TouchableOpacity>

              <View style={{ flex: 1, alignSelf: 'flex-end', alignItems: 'center', flexDirection: 'row', marginBottom: 20}}>
                <View style={{flex: 3, }}></View>

                <TouchableOpacity style={{flex: 4, justifyContent: 'center', alignItems: 'center'}} onPress={() => { this.snap() }}>
                  <Image style={{ resizeMode: 'cover', width: 100, height: 100}} source={require('../../images/circle.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 3, alignItems: 'center' }} >
                  {/* <Ionicons style={{backgroundColor: '#a88e25', borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="md-send" size={32} color="white"/> */}
                </TouchableOpacity>
              </View> 
              
            </View>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})