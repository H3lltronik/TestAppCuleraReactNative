import { StyleSheet, Text, View, Alert, SafeAreaView, ScrollView, ActivityIndicator, Image, TextInput } from 'react-native';
import { Container, Header, Button, Content, Item, Input, Icon } from 'native-base';
import * as DocumentPicker from 'expo-document-picker';
import React, { Component } from 'react';
import axios from 'axios';

export default class IconTextboxExample extends Component {

  state = {
    username: '',
    password: '',
  }
    
  static navigationOptions = {
      headerTitle: "Ola anburgesa" ,
      headerLeft: (<Icon style={{ marginLeft: 25 }} type="FontAwesome" name="arrow-left" />),
  };

  async login () {
    let response = await DocumentPicker.getDocumentAsync({type: '*/*'})

    const data = new FormData();

    data.append('file', response);

    await axios.post('http://192.168.0.3:8000/api/file', data, {headers: {
      'content-type': `multipart/form-data; boundary=${form._boundary}`,
    },})
    .then(res => {
      console.log("ira nomas", res)
    });
    console.log("salida", response)

  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
            <Image source={require('../images/Katawa_Shoujo_logo.png')} />

            <View style={{width: '90%' }}>
              <Item>
                <Icon active name='home' />
                <Input placeholder='Username' onChangeText={(username) => this.setState({username})}/>
              </Item>

              <Item>
                <Icon active name='home' />
                <Input placeholder='Password' secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
              </Item>
            </View>

            <Button style={{width: '50%' }} onPress={this.login}>
              <Text>Login</Text>
            </Button>


        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
})
