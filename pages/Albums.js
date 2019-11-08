import { StyleSheet, Text, View, ImageBackground, TouchableOpacity  } from 'react-native';
import React, { Component } from 'react';

class Album extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View>
                <Text>Albums cargados XD: { this.props.albums.length }</Text>

                <View style={styles.albumsGrid}>
                {this.props.albums.map((album) => {
                    return <TouchableOpacity key={album.id} style={styles.albumsItem} onPress={() => { this.props.action (album) } }>
                    <ImageBackground  style={{width: '100%', height: 150}} source={{uri: 'https://picsum.photos/id/813/500/300'}}>
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{paddingHorizontal: 10, textAlign: 'center'}}>{ album.title }</Text>
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

export default Album;