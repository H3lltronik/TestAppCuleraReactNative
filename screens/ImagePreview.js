import React from 'react';
import { Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import * as axios from 'axios'

export default class ImagePreview extends React.Component {

    constructor (props) {
        super(props)
    }

    componentWillMount () {
        console.log("Hola props xd", this.props.navigation.state.params.image)
    }

    async fileUpload () {
        let response = this.props.navigation.state.params.image
        response.photo.type = 'image/jpeg'
        response.photo.name = new Date().getUTCMilliseconds() + ".jpg";
    
        let file = new FormData();
        file.append('file', response.photo);
        file.append('localizacion', JSON.stringify(response.location)); // No se dejaba si no lo hacia string
    
        axios.post('http://192.168.0.2:8000/api/file', file , {headers: { 'Content-type': 'application/x-www-form-urlencoded' }} )
        .then(res => {
          console.log("gooosh", res.data)
        })
        .catch(error => {
          console.log("error amiko", error.toJSON() , Object.keys(error))
        });
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <ImageBackground  source={{ uri: this.props.navigation.state.params.image.photo.uri }} style={{ flex: 1, resizeMode: 'cover' }} >
                    <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}>
                        <Text>Maquia is an angel</Text>

                        <TouchableOpacity style={{ backgroundColor: 'blue', flex: 1, alignSelf: 'flex-end', alignItems: 'flex-start', width: '100%'}}>
                            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }} onPress={ () => { this.fileUpload() } }> Upload </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

