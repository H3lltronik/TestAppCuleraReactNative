import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform, StatusBar } from 'react-native';
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

              <Ionicons style={{ position: 'absolute', top: 0, left: 0, marginTop: StatusBar.currentHeight, marginLeft: 10 }} name="ios-close" size={32} color="white" />
              <TouchableOpacity
                style={{ backgroundColor: 'blue', flex: 1, alignSelf: 'flex-end', alignItems: 'flex-start'}}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                    backgroundColor: 'red',
                  flex: 1,
                  alignSelf: 'flex-end',
                  alignItems: 'flex-end',
                }}
                onPress={() => { this.snap() }}>
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Snap! </Text>
              </TouchableOpacity>
              
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