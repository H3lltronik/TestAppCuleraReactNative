import { Text, View, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native';
import { StackActions } from "react-navigation";
import { Ionicons } from '@expo/vector-icons';
import * as axios from 'axios'
import React from 'react';

export default class ImagePreview extends React.Component {

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
            <View style={{flex: 1}}>
                <ImageBackground  source={{ uri: navigation.state.params.photo.uri }} style={{ flex: 1, resizeMode: 'cover' }} >
                    <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>

                        <TouchableOpacity style={{position: 'absolute', top: 0, left: 0, marginTop: StatusBar.currentHeight, marginLeft: 30, padding: 5}}
                        onPress={ () => { this.goBack() } }>
                            <Ionicons style={{  }} name="ios-close" size={35} color="white" />
                        </TouchableOpacity>

                        <View style={{ flex: 1, alignSelf: 'flex-end', alignItems: 'center', flexDirection: 'row', marginBottom: 20}}>
                            <View style={{flex: 3, }}></View>

                            <TouchableOpacity style={{flex: 4, justifyContent: 'center', alignItems: 'center'}} onPress={() => { this.snap() }}>
                                {/* <Image style={{ resizeMode: 'cover', width: 100, height: 100}} source={require('../../images/circle.png')} /> */}
                            </TouchableOpacity>

                            <TouchableOpacity style={{ flex: 3, alignItems: 'center' }} >
                                <Ionicons style={{backgroundColor: '#a88e25', borderRadius: 100, paddingHorizontal: 10, paddingVertical: 8 }} name="md-send" size={32} color="white"/>
                            </TouchableOpacity>
                        </View> 

                    </View>
                </ImageBackground>
            </View>
        );
    }
}

