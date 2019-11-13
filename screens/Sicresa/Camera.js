import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform, StatusBar, Image } from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export default class CameraSicresa extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props);
    }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync({ quality: 1 });
      
      this.props.navigation.navigate('ImagePreview', {image: { photo, location: this.props.navigation.state.params.location}})
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
          <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }} >
            <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>

              <TouchableOpacity style={{position: 'absolute', top: 0, left: 0, marginTop: StatusBar.currentHeight, marginLeft: 30}}>
                <Ionicons style={{  }} name="ios-close" size={35} color="white" />
              </TouchableOpacity>

              <View style={{ flex: 1, alignSelf: 'flex-end', alignItems: 'center', flexDirection: 'row', marginBottom: 20}}>
                <View style={{flex: 3, }}></View>

                <TouchableOpacity style={{flex: 4, justifyContent: 'center', alignItems: 'center'}} onPress={() => { this.snap() }}>
                  <Image style={{ resizeMode: 'cover', width: 100, height: 100}} source={require('../../images/circle.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={{ flex: 3, alignItems: 'center' }} >
                  <Ionicons style={{backgroundColor: '#a88e25', borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="md-send" size={32} color="white"/>
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