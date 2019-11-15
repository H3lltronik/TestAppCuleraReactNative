import { Text, View, TouchableOpacity, Image, ImageBackground, StatusBar, ToastAndroid, Dimensions } from 'react-native';
import { Container, Header, Button, Content, Item, Input, Icon, List, ListItem } from 'native-base';
import { NavigationActions, StackActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import * as axios from 'axios'
import React from 'react';

import { connect } from 'react-redux';
import moment from 'moment';

class RegistroCompleto extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props)
    }

    componentWillMount () {
    }

    goBack () {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        this.props.navigation.dispatch(resetAction);
    }

    registerSchedule = () => {
        let idEmployee = this.props.employeeAuth.id
        let idSchedule = this.props.scheduleOnCheck.id
        this.props.checkSchedule(idEmployee, idSchedule)
        ToastAndroid.show('Registrada!', ToastAndroid.SHORT); 
        this.goBack ()
    }

    render () {
        const {navigation} = this.props
        return (
            <Container style={{ marginTop: Constants.statusBarHeight }}>
                <View style={{ flexDirection: 'column', alignItems: 'stretch', paddingLeft: 0}}>
                    <View style={{ width: Dimensions.get('window').width, backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10 }}>
                        <TouchableOpacity><Ionicons style={{  }} name="md-arrow-back" size={20} color="black"/></TouchableOpacity>
                        <TouchableOpacity><Ionicons style={{  }} name="md-settings" size={20} color="black"/></TouchableOpacity>
                    </View>
                </View>

                <View style={{ backgroundColor: '#d6aa12', flex: 1, width: '100%', paddingHorizontal: 30, paddingVertical: 15, alignItems: 'center', alignContent: 'center', justifyContent:'center', flexDirection: 'column', maxHeight: '25%' }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Registro</Text>
                    <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold' }}> { this.props.schedule.registeredTime.format('DD MM YYYY - hh:mm') } </Text>
                    <Ionicons style={{ borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="md-checkmark" size={32} color="white"/>
                </View>

                <View style={{ flex: 1, height: '100%', backgroundColor: '#d6aa12', marginTop: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{ paddingHorizontal: 20, alignSelf: 'center', justifyContent: 'center'}}>
                        <Text style={{ color: 'white', fontSize: 30, textAlign: 'center'}}>Tu proximo reporte debes realizarlo</Text>
                        <Text style={{ color: 'white', fontSize: 36 , fontWeight: 'bold', marginTop: 50, textAlign: 'center' }}> { this.props.nextSchedule.format('DD MM YYYY - hh:mm') } </Text>
                    </View>

                </View>

                <TouchableOpacity style={{ backgroundColor: '#0F381F',  paddingHorizontal: 10, paddingVertical: 10, textAlign: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', alignSelf: 'center' }}>CONTINUAR</Text>
                </TouchableOpacity>

            </Container>
        );
    }
}

const mapStateToProps = (state, props) => {
    let idEmployee = 1
    let idSchedule = 4
    // let idEmployee = props.navigation.state.params.idEmployee
    // let idSchedule = props.navigation.state.params.idSchedule
    let employee = state.company.employees.find((auxFind) => {
        return (auxFind.id == idEmployee)
    })

    let schedule = employee.schedule.find((auxFind) => {
        return (auxFind.id == idSchedule)
    })
    let index = employee.schedule.findIndex((auxFind) => {
        return (auxFind.id == idSchedule)
    })

    let nextScheduleAux = employee.schedule[employee.schedule.length];

    if (index < employee.schedule.length) {
        nextScheduleAux = employee.schedule[index+1]
    }

    let nextSchedule = moment().hours(0).minutes(0).seconds(0).milliseconds(0);
    nextSchedule.set({hour: nextScheduleAux.time.hour, minute: nextScheduleAux.time.minute, second: 0, millisecond: 0 })

    console.log("PROPS", employee, schedule, nextSchedule)

    return {employee, schedule, nextSchedule};
};

export default connect(mapStateToProps)(RegistroCompleto)