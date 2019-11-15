import { Text, View, TouchableOpacity, Image, ImageBackground, StatusBar, Dimensions } from 'react-native';
import { StackActions } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import * as axios from 'axios'
import React from 'react';

export default class Toolbar extends React.Component {

    static navigationOptions = {
        header: null,
    };

    constructor (props) {
        super(props)
    }

    componentWillMount () {
    }

    goBack () {
        const popAction = StackActions.pop({n: 1});          
        this.props.navigation.dispatch(popAction);
    }

    render () {
        const {navigation} = this.props
        return (
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
        );
    }
}

