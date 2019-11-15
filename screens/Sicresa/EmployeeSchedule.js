import { StyleSheet, Text, View, Alert, ToastAndroid, Image, Dimensions, BackHandler } from 'react-native';
import { Container, Header, Button, Content, Item, Input, Icon, List, ListItem } from 'native-base';
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

class Inicio extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super (props);
    }

    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', () => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
            });
            this.props.navigation.dispatch(resetAction);
            return true
        });
    }

    openCamera = () => {
        this.props.navigation.navigate('SicresaCamera')
    }

    setScheduleOnCheck (schedule) {
        this.props.setScheduleOnCheck(schedule); 
    }

    render () {
        let lista = []; 

        if (this.props.employeeAuth.schedule) {
            this.props.employeeAuth.schedule.forEach(schedule => {
                let imagen = this.props.employeeAuth.image
                let icon;
                let ausentStyle = { opacity: 1 }

                let scheduleTime = moment().hours(0).minutes(0).seconds(0).milliseconds(0);
                scheduleTime.set({hour: schedule.time.hour, minute: schedule.time.minute, second: 0, millisecond: 0 })
                scheduleTime.toISOString()

                let isPastTime = moment().isSameOrAfter(scheduleTime)
                let activeRegistration = false
                let timePassed = moment().diff(scheduleTime, 'minutes')
                let scheduleAction = (() => {})
                
                if (timePassed > -15 && timePassed < 15 && schedule.status != 'CHECKED') {
                    schedule.status = 'CHECKING'
                    activeRegistration = true
                } else if (timePassed > 15 && schedule.status != 'CHECKED') {
                    schedule.status = 'FAILED'
                }

                switch (schedule.status) {
                    case 'CHECKING': {
                        icon = <Ionicons style={{ borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="ios-arrow-forward" size={32} color="#d6aa12"/>
                        scheduleAction = (() => { this.setScheduleOnCheck(schedule); this.openCamera () }) 
                        break;
                    }
                    case 'CHECKED': {
                        icon = <Ionicons style={{ borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="md-checkmark" size={32} color="green"/>
                        activeRegistration = true
                        break;
                    }
                    case 'FAILED': {
                        icon = <Ionicons style={{ borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="ios-close" size={32} color="red"/>
                        ausentStyle = { opacity: 0.3 }
                        break;
                    }
                }

                if (isPastTime || activeRegistration) {
                    lista.push( 
                        <ListItem key={schedule.id} style={{paddingLeft: 0, marginLeft: 0}} onPress={ scheduleAction }>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', flex: 1 }}>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ color: 'white', fontSize: 17, marginTop: 5 }}>
                                        {schedule.type}
                                    </Text>
                                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>
                                        { schedule.registeredTime
                                            ? schedule.registeredTime.format('DD MM YYYY - hh:mm')
                                            : scheduleTime.format('DD MM YYYY - hh:mm')
                                        }
                                    </Text>
                                </View>
                                {icon}
                            </View>
                        </ListItem> 
                    )
                }
            });
        }

        return (
            <Container style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ flexDirection: 'column', alignItems: 'stretch', paddingLeft: 0}}>
                    <View style={{ width: Dimensions.get('window').width, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10 }}>
                        <TouchableOpacity><Ionicons style={{  }} name="md-arrow-back" size={20} color="black"/></TouchableOpacity>
                        <TouchableOpacity><Ionicons style={{  }} name="md-settings" size={20} color="black"/></TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, height: '100%' }}>
                    <View style={{ flexDirection: 'column', alignItems: 'stretch', flex: 1 }}>
                        <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginVertical: 10 }}>

                            <Image style={{ height: 100, width: 100,}}  source={{uri: this.props.employeeAuth.image}} /> 

                            <View style={{ flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                                <View style={{ }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{this.props.employeeAuth.name}</Text>
                                    <Text>{this.props.employeeAuth.lastName}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ backgroundColor: '#0F381F', flex:1, alignSelf:'stretch', paddingHorizontal: 10 }}>
                            <Content style={{ }}>
                                <List style={{ }}>
                                    {lista}
                                </List>
                            </Content>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', width: '100%', backgroundColor: 'black', alignItems: 'center', justifyContent: 'center', paddingVertical: 5 }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ width: 20, height: 20 }} resizeMode="contain" source={require('../../images/dadadadadadada.png')} />
                            <Text style={{ color: '#a88e25' }}>Inicio</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
        setScheduleOnCheck: (schedule) => dispatch({type: 'SCHEDULE_ON_CHECK', schedule}),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Inicio)