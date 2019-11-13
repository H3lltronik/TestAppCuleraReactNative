import { StyleSheet, Text, View, Alert, BackHandler, Platform, StatusBar } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Button, Content, Item, Input, Icon } from 'native-base';
import { StackActions, NavigationActions  } from 'react-navigation'

import Camera from './Camera'

class Logged extends Component {
    constructor (props) {
        super(props);
    }

    componentWillMount () {
    }

    handleBack  = () => {
        console.log("back") 
        this.props.navigation.popToTop(); 
    }

    render () {
        return (
            <Container>
                <Content contentContainerStyle={styles.container}>
                    <View>
                        <Text>Logged!</Text>
                        <View>
                            <Button onPress={ () => { this.handleBack() } }>
                                <Text>Logout</Text>
                            </Button>   
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0
    },
})

export default Logged;