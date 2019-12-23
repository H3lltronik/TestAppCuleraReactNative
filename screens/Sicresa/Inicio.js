import { StyleSheet, Text, View, Alert, ToastAndroid, Image, Dimensions    } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Button, Content, Item, Input, Icon, List, ListItem } from 'native-base';
import { SplashScreen } from 'expo';
import Constants from 'expo-constants';
import * as axios from 'axios'
import moment from 'moment';

import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Toolbar from "./Components/Toolbar";

class Inicio extends Component {
    interval = null;

    state = {
        hour: ''
    }

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super (props);
    }

    componentDidMount () {
        this.setState({ hour: moment().format('DD MM YYYY - hh:mm') })
        
        this.interval = setInterval(() => {
            this.setState({ hour: moment().format('DD MM YYYY - hh:mm') })
        }, 1000);
    }

    componentWillUnmount () {
        clearInterval (this.interval)
    }

    render () {
        let lista = []; 
        const preview = { uri: "data:image/jpeg;base64,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" };

        this.props.employees.forEach(employee => {
            let ausentStyle = { opacity: 1 }
            let schedule = employee.schedule[0]
            let imagen = employee.image
            let icon;

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
            } else if (timePassed < -15) {
                schedule.status = 'WAITING'
            }


            switch (schedule.status) {
                case 'CHECKING': {
                    icon = <Ionicons style={{ borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="ios-arrow-forward" size={32} color="#d6aa12"/>
                    break;
                }
                case 'CHECKED': {
                    icon = <Ionicons style={{ borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="md-checkmark" size={32} color="green"/>
                    break;
                }
                case 'FAILED': {
                    icon = <Ionicons style={{ borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="ios-close" size={32} color="red"/>
                    ausentStyle = { opacity: 0.3 }
                    break;
                }
                case 'WAITING': {
                    icon = <Ionicons style={{ borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="md-time" size={32} color="gray"/>
                    ausentStyle = { opacity: 0.3 }
                    break;
                }
            }
            
            lista.push( 
                <ListItem key={employee.id} onPress={ () => { this.props.selectEmployee(employee); this.props.navigation.navigate('AuthMiddleComponent', { target: 'EmployeeAuth' }) } }>
                    <View style={{ flexDirection: 'row' }}>

                        <Image style={{ height: 100, width: 100, ...ausentStyle}}  source={{uri: imagen}} /> 

                        <View style={{ flex: 6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                            <View style={{ ...ausentStyle }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{employee.name}</Text>
                                <Text>{employee.lastName}</Text>
                            </View>
                            {icon}
                        </View>
                    </View>
                </ListItem> 
            )
        });

        return (
            <Container style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ flexDirection: 'column', alignItems: 'stretch', paddingLeft: 0}}>
                    <View style={{ width: Dimensions.get('window').width, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10 }}>
                        <Text>Comercial Mexicana</Text>
                        <TouchableOpacity><Ionicons style={{  }} name="md-settings" size={20} color="black"/></TouchableOpacity>
                    </View>
                    <View style={{ width: Dimensions.get('window').width, backgroundColor: 'green', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 23, marginVertical: 10, fontWeight: 'bold' }}>
                            { this.state.hour }
                        </Text>
                    </View>
                </View>
                <Content>
                    <List>
                        {lista} 
                    </List>
                </Content>
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
      employees: state.company.employees,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        selectEmployee: (employee) => dispatch({type: 'SELECT_AUTH_EMPLOYEE', employee}),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Inicio)