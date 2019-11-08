import { StyleSheet, Text, View, ImageBackground, TouchableOpacity  } from 'react-native';
import React, { Component } from 'react';

class Images extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View>
                <Text>Fotos cargadas: { this.props.images.length }</Text>

                <View style={styles.albumsGrid}>
                {this.props.images.map((image) => {
                    return <TouchableOpacity key={image.id} style={styles.albumsItem}>
                    <ImageBackground  style={{width: '100%', height: 150}} source={{uri: image.thumbnailUrl}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{paddingHorizontal: 10, textAlign: 'center'}}>{ image.title }</Text>
                    </View>
                    </ImageBackground >
                    </TouchableOpacity>
                })}
                </View>
            </View>
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

export default Images;