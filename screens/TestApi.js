import { StyleSheet, Text, View, Alert, SafeAreaView, ScrollView, StatusBar, ActivityIndicator, Image, TextInput } from 'react-native';
import { Container, Header, Button, Content, Item, Input, Icon } from 'native-base';
import { StackActions, NavigationActions  } from 'react-navigation'
import * as DocumentPicker from 'expo-document-picker';
import React, { Component } from 'react';
import * as axios from 'axios'

import { connect } from 'react-redux';

class TestApi extends Component {

  state = {
    username: 'test@test.com',
    password: 'papaya',
  }

  constructor(props) {
      super(props);
  }
    
  static navigationOptions = {
      headerTitle: "Ola anburgesa localizada" ,
      headerLeft: (<Icon style={{ marginLeft: 25 }} type="FontAwesome" name="arrow-left" />),
  };

  componentWillMount () {
    
  }

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
      const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Logged' })],
      }); 
      this.props.navigation.dispatch(resetAction);
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

  testDispatch (iraUnaVairbale) {
    dispatch({  })
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
                <Input placeholder='Username' value="test@test.com" onChangeText={(username) => this.setState({username})}/>
              </Item>

              <Item>
                <Icon active name='home' />
                <Input placeholder='Password' secureTextEntry={true} value="papaya" onChangeText={(password) => this.setState({password})}/>
              </Item>
            </View>

            <View style={{width: '50%' }}>
              <Button style={{ marginTop: 20 }} onPress={this.login}>
                <Text>Login</Text>
              </Button>
              
              <View>
                <Button style={{ marginTop: 20 }} onPress={ () => { this.props.todoAdd("Ajugero") } }>
                  <Text>Kyaaaaa</Text>
                </Button>

                <Button style={{ marginTop: 20 }} onPress={ () => { this.props.todoAdd("Agujero") } }>
                  <Text>Covfefe</Text>
                </Button>

                <Button style={{ marginTop: 20 }} onPress={ () => { console.log(this.props.todos ) } }>
                  <Text>Todo alc</Text>
                </Button>
              </View>

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

const mapStateToProps = (state, props) => {
  return {
    todos: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    todoAdd: (name) => dispatch({type: 'TODO_ADD', todo: { id: '0', name, completed: false }}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestApi)