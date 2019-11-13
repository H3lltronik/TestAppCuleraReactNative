import { StyleSheet, Text, View, Alert, Image  } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Button, Content, Item, Input, Icon } from 'native-base';
import Constants from 'expo-constants';

class Login extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props);
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
                            <Input placeholder="Usuario" style={{ textAlign: 'center' }} />
                        </Item>
                        <Item style={{ marginBottom: 30, marginLeft: 30, marginRight: 30 }}>
                            <Input placeholder="Contraseña" style={{ textAlign: 'center' }} />
                        </Item>
                        <Text>¿Olvidaste tu contraseña?</Text>

                        <Button full dark style={{ position: 'absolute', bottom: 0, width: '100%', paddingTop: 10 }}>
                            <Text style={{ color: 'white' }}>INICIAR SESION</Text>
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