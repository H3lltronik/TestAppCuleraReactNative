import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, ScrollView, Image } from 'react-native';

class UserProfile extends Component {
    
    state = {
        data: {}
    }

    constructor (props) {
        super(props);
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={{width: 70, height: 70}} source={{uri: 'https://www.shareicon.net/data/2016/09/15/829466_man_512x512.png'}}/>
                    <Button title="Ver weas" onPress={() => this.props.navigation.navigate('Profile', {data: this.props.data}) }/>
                </View>
                <View>
                    <Text style={styles.name}>{this.props.data.name} <Text style={styles.nickname}>(@{ this.props.data.username })</Text> </Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                        marginTop: 10,
                    }}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        paddingTop: 20,
        flex: 1,
        width: '100%',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    nickname: {
        fontSize: 14,
        color: 'gray',   
    }
})

export default UserProfile;