import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';
import React, { Component } from 'react';

import Album from './Albums'

class AlbumContainer extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
             <SafeAreaView style={{flex: 1}}> 
             <ScrollView>
                <Album albums={this.props.albums} action={ this.props.action }></Album>
             </ScrollView> 
           </SafeAreaView> 
        )
    }
}

const styles = StyleSheet.create({
    albumsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    albumsItem: {
        width: '50%',
        height: 'auto',
        marginVertical: 2,
        paddingHorizontal: 5,
        position: 'relative'
    },
})

export default AlbumContainer;