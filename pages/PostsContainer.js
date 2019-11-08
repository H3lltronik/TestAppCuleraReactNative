import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';
import React, { Component } from 'react';
import axios from 'axios'


class PostsContainer extends Component {
    state = {
        posts: [],
    }

    constructor (props) {
        super(props);
    }

    componentDidMount  () {
          this.loadPosts ()
    }

    loadPosts () {      
        this.setState({ 
          loading: true,
        })
  
        axios.get('https://jsonplaceholder.typicode.com/posts', {params: { userId: this.props.userId }})
        .then(posts => {
          this.setState({
            posts: posts.data,
            loading: false,
          })
        }).catch(error => {
          console.log("Posts ERROR")
        })
    }

    render () {
        return (
             <SafeAreaView style={{flex: 1}}> 
             <ScrollView>
                <View>
                    <Text>Posts cargados XD: { this.state.posts.length }</Text>

                    <View style={styles.albumsGrid}>
                    {this.state.posts.map((post) => {
                        return <TouchableOpacity key={post.id} style={styles.albumsItem}>
                        <ImageBackground  style={{width: '100%', height: 150}} source={{uri: 'https://picsum.photos/id/813/500/300'}}>
                        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{paddingHorizontal: 10, textAlign: 'center'}}>{ post.title }</Text>
                        </View>
                        </ImageBackground >
                        </TouchableOpacity>
                    })}
                    </View>
                </View>
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
        width: '100%',
        height: 'auto',
        marginVertical: 2,
        paddingHorizontal: 5,
        position: 'relative'
    },
})

export default PostsContainer;