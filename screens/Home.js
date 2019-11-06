import { StyleSheet, Text, View, Button, Alert, SafeAreaView, ScrollView, ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios'

import UserProfile from '../components/UserProfile'

const USERS = 'https://jsonplaceholder.typicode.com/users'

export default class Home extends Component {

    state = {
      users: [],
      loading: false,
    }
  
    constructor () {
      super();
      console.log("HOME");
    }

    componentDidMount () {
        this.loadUsers ()
    }
  
    loadUsers () {
        this.setState({ loading: true })
        console.log("Loading?");
      axios.get(USERS).then ((res) => {
        this.setState({
          users: res.data,
          loading: false,
        })
      })
      .catch ((error) => {
        this.setState({ loading: false })

        console.log("Error", error)
      })
    }
  
    render () {
      return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <Text>
                        { this.state.users.length } users were loaded!
                    </Text>
                    {/* <Button title="Press me" onPress={() => this.props.navigation.navigate('Profile') }/> */}
                    {
                        this.state.users.map((user) => {
                            return <UserProfile key={user.id} data={user} navigation={this.props.navigation}></UserProfile>
                        })
                    }
                </View>

                { (this.state.loading)? 
                <View style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size="large"/>
                </View>
                :
                <View></View>
                }
            </ScrollView>
        </SafeAreaView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  