import { StyleSheet, Text, View, Alert, SafeAreaView, ScrollView, ActivityIndicator, Image, TextInput } from 'react-native';
import { Container, Header, Button, Content, Item, Input, Icon } from 'native-base';
import * as DocumentPicker from 'expo-document-picker';
import React, { Component } from 'react';
import * as axios from 'axios'

export default class IconTextboxExample extends Component {

  state = {
    username: '',
    password: '',
  }
    
  static navigationOptions = {
      headerTitle: "Ola anburgesa localizada" ,
      headerLeft: (<Icon style={{ marginLeft: 25 }} type="FontAwesome" name="arrow-left" />),
  };

  async fileUpload () {
    let response = await DocumentPicker.getDocumentAsync({type: 'image/jpeg'})
    response.type = 'image/jpeg'

    const data = new FormData();
    data.append('file', response);

    axios.post('http://192.168.0.2:8000/api/file', data , {headers: { 'Content-type': 'application/x-www-form-urlencoded' }} )
    .then(res => {
      console.log("gooosh", res.data)
    })
    .catch(error => {
      console.log("error", error, JSON.stringify(error))
    });
  }

  login = () => {
    let data = { 
      'email': this.state.username, 
      'password': this.state.password 
    }

    axios.post('http://192.168.0.2:8000/api/login', data, { headers: { 'Content-Type':  'application/json' }})
    .then(res => {
      console.log("ira nomas el login", res.data)
    })
    .catch(error => {
      console.log("error login", error, JSON.stringify(error))
    });
  }

  secret = () => {
    axios.post('http://192.168.0.2:8000/api/secret')
    .then(res => {
      console.log("El secreto", res.data)
    })
    .catch(error => {
      console.log("error login", error, JSON.stringify(error))
    });
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={styles.container}>
            <Image source={require('../images/Katawa_Shoujo_logo.png')} />

            <Text>asd { this.state.username }</Text>

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

            <View style={{width: '50%' }}>
              <Button style={{ marginTop: 20 }} onPress={this.login}>
                <Text>Login</Text>
              </Button>

              <Button style={{ marginTop: 20 }} onPress={this.fileUpload}>
                <Text>Imagen</Text>
              </Button>

              <Button style={{ marginTop: 20 }} onPress={this.secret}>
                <Text>Secret</Text>
              </Button>

              <Button style={{ marginTop: 20 }} onPress={  () => { this.props.navigation.navigate('Location') } }>
                <Text>Location</Text>
              </Button>

              <Button style={{ marginTop: 20 }} onPress={  () => { this.props.navigation.navigate('Camera') } }>
  
                <Text>Camera</Text>
              </Button>
            </View>


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
