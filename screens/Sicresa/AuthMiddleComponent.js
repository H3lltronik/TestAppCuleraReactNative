import { Container, Header, Button, Content, Item, Input, Icon, List, ListItem } from 'native-base';
import { StyleSheet, Text, View, Alert, ToastAndroid, Image, Dimensions    } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import React, { Component } from 'react';
import { SplashScreen } from 'expo';
import Constants from 'expo-constants';
import * as axios from 'axios'
import moment from 'moment';

import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import {Image} from "react-native-expo-image-cache";

class AuthMiddleComponent extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super (props);
    }

    componentDidMount () {
    }

    resetStack (target) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: target })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    checkAuth () {
        
        if (this.props.employeeAuth.code == this.state.code) {
            const { target } = this.props.navigation.state.params
            this.resetStack (target)
            ToastAndroid.show('Wooo', ToastAndroid.SHORT); 

            
        } else {
            ToastAndroid.show('Contraseña incorrecta', ToastAndroid.SHORT);
        }
    }

    render () {
        return (
            <Container style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ flexDirection: 'column', alignItems: 'stretch', paddingLeft: 0}}>
                    <View style={{ width: Dimensions.get('window').width, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10 }}>
                        <TouchableOpacity><Ionicons style={{  }} name="md-arrow-back" size={20} color="black"/></TouchableOpacity>
                        <TouchableOpacity><Ionicons style={{  }} name="md-settings" size={20} color="black"/></TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1, height: '100%' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'center', flex: 1, backgroundColor: '#0F381F', textAlign: 'center', justifyContent: 'space-around', paddingBottom: 100}}>

                        <View style={{color: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 23 }}>{this.props.employeeAuth.name}</Text>
                            <Text style={{ color: 'white', fontSize: 17 }}>{this.props.employeeAuth.lastName}</Text>
                        </View>

                        <View style={{ textAlign: 'center', color: 'white', paddingHorizontal: 50 }}>
                            <Text style={{ color: 'white', fontSize: 28, fontWeight: 'bold', textAlign: 'center' }}>Ingresa tu código de usuario</Text>
                        </View>

                        <Item style={{ marginBottom: 30, marginLeft: 30, marginRight: 30 }}>
                            <Input placeholder="Codigo" onChangeText={(code) => this.setState({code})} style={{ textAlign: 'center', color: '#a88e25' }} placeholderTextColor="#a88e25" />
                        </Item>

                    </View>
                </View>

                <View style={{ flexDirection: 'column', backgroundColor: '#a88e25' }}>
                    <TouchableOpacity onPress={ () => { this.checkAuth() } }>
                        <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#a88e25', alignItems: 'center', justifyContent: 'center', paddingVertical: 5 }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#fff', fontSize: 25 }}>CONTINUAR</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', width: '100%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', paddingVertical: 5 }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ width: 20, height: 20 }} resizeMode="contain" source={require('../../images/dadadadadadada.png')} />
                                <Text style={{ color: '#a88e25' }}>Inicio</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </Container>
        );
    }
}

const mapStateToProps = (state, props) => {
    return { 
        employeeAuth: state.employeeAuth
    };
  };
const mapDispatchToProps = (dispatch) => {
    return {

    };
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(AuthMiddleComponent)