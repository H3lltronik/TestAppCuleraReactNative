import { StyleSheet, Text, View, Alert, Image, ToastAndroid   } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Button, Content, Item, Input, Icon } from 'native-base';
import { SplashScreen } from 'expo';
import Constants from 'expo-constants';
import * as axios from 'axios'

class Login extends Component {

    static navigationOptions = {
        header: null, 
    };

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        // SplashScreen.preventAutoHide()

        // axios.post('http://192.168.0.2:8000/api/secret').then(res => {
        //     SplashScreen.hide();
        //     ToastAndroid.show('El autologin', ToastAndroid.SHORT);
        //     console.log("El autologin")
        // }).catch(error => {
        //     SplashScreen.hide();
        //     ToastAndroid.show('No logeado', ToastAndroid.SHORT);
        //     console.log("No logeado")
        // });


     } 
    
    render () {
        return (
            <Container style={{ paddingTop: Constants.statusBarHeight, backgroundColor: '#0F381F', flex: 1 }}>
                <Content contentContainerStyle={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ height: '50%', width: '100%', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row'}}>
                        <Image style={{ flex: 1, aspectRatio: 1.5,  resizeMode: 'contain'}} source={require('../../images/sicresa-green.jpg')} />
                    </View>

                    <View style={{ height: '50%', width: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                        <Item style={{ marginBottom: 30, marginLeft: 30, marginRight: 30 }}>
                            <Input placeholder="Usuario" style={{ textAlign: 'center', color: '#a88e25' }} placeholderTextColor="#a88e25" />
                        </Item>
                        <Item style={{ marginBottom: 30, marginLeft: 30, marginRight: 30 }}>
                            <Input placeholder="ContraseñaA" style={{ textAlign: 'center', color: '#a88e25' }} placeholderTextColor="#a88e25" />
                        </Item> 
                        <Text style={{ color: '#7b8d76' }}>¿Olvidaste tu contraseña?</Text>

                        <Button full dark style={{ position: 'absolute', bottom: 0, width: '100%', paddingTop: 10 }} onPress={ () => { this.props.navigation.navigate('Home') } }>
                            <Text style={{ color: 'white', fontSize: 20 }}>INICIAR SESION</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({

})

export default Login;