import { StyleSheet, Text, View, Button, Image,SafeAreaView, ScrollView, ImageBackground, ActivityIndicator, TouchableOpacity, BackHandler  } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import axios from 'axios'

import Album from '../pages/Albums'
import Images from '../pages/Images'

const USERS = 'https://jsonplaceholder.typicode.com/users'

class Profile extends Component {

    state = {
      posts: [],
      data: {
        name: '',
        username: '',
      },
      albums: [],
      images: [],
      loading: false,
      selectedAlbum: {},
      onPhotos: false,
    }

    static navigationOptions = {
      headerTransparent: true,
      title: 'Boca sho te amoo',
      headerTintColor: 'red',
      headerStyle: { backgroundColor: 'black', borderWidth: 1, borderBottomColor: 'white' },
      headerTitleStyle: { color: 'white' },
      headerLeft: (<Button title='back' onPress={() => console.log("Hardware Back!!!!")}/>),
    }
  
    constructor (props) {
      super(props);
    }

    componentDidMount  () {
      // setState es asincrona, su segundo parametro es una funcino de callback
      this.setState((state, props) => ({
        data: props.navigation.getParam('data', {})
      })
      , 
      () => {
        this.setState({ loading: true })
        this.loadAlbums ()
      }
      );
      
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => { console.log("Hardware Back!!!!") });
    }

    loadPhotos (album) {
      this.setState({ 
        onPhotos: true,
        loading: true,
      })

      axios.get('https://jsonplaceholder.typicode.com/photos', {params: { albumId: album.id }})
      .then(images => {
        this.setState({
          images: images.data,
          loading: false,
        })
      }).catch(error => {
        console.log("Posts ERROR")
      })
    }

    loadAlbums () {
      axios.get('https://jsonplaceholder.typicode.com/albums', {params: { userId: this.state.data.id }})
      .then(albums => {
        console.log("ke mmda", this.state.data.id)
        this.setState({
          albums: albums.data,
          loading: false
        })
      }).catch(error => {
        this.setState({ loading: false })
        console.log("Posts ERROR")
      })
    }
  
    render () {
      return (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
              <Image style={{width: 70, height: 70}} source={{uri: 'https://www.shareicon.net/data/2016/09/15/829466_man_512x512.png'}}/>
          </View>
          <View>
              <Text style={styles.name}>{this.state.data.name} <Text style={styles.nickname}>(@{ this.state.data.username })</Text> </Text>
          </View>
          <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 10, }} />

          <SafeAreaView style={{flex: 1}}>
            <ScrollView>
              { (!this.state.onPhotos)?
                <Album albums={this.state.albums}/>
                :
                <Images images={this.state.images}/>
              }
            </ScrollView>
          </SafeAreaView>

          { this.state.loading &&
          <View style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size="large"/>
          </View>
          }
        </View>
      );
    }

    
  }

  const styles = StyleSheet.create({

    container: {
        paddingTop: 100,
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
    },
})

export default Profile;