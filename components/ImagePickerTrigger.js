import React, {Component}  from 'react';
import {
        View,
        TouchableOpacity,
        Image,
        StyleSheet,
        Text,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';
import defaultImage from '../assets/images/camera.png';


const pickerConfig = {
        title: 'Select Image',
        storageOptions: {
          skipBackup: true,
        },
      
};



class ImagePickerTrigger extends Component{
        constructor(props){
                super(props);
        }


        imagePickerCallback = (response) => {

                const {carousePickerComponent } = this.props;

                if (response.didCancel) {
                        
                } else if (response.error) {
                        console.log('ImagePicker Error: ', response.error);
                } else {
                        const source = { uri: response.uri };
                        carousePickerComponent.push(response.data);
                }
        }

        startPicker = () => {
                ImagePicker.showImagePicker(pickerConfig, this.imagePickerCallback);
        }

        render = () =>{
              return    <View style={styles.container}>
                                <TouchableOpacity onPress={this.startPicker}>
                                        <View style={styles.content_container}>
                                                <Image resizeMode={"contain"} style={styles.image} source={defaultImage}></Image>
                                                <Text>Add a photo</Text>
                                        </View>
                                </TouchableOpacity>
                        </View>
        }
}

const styles = StyleSheet.create({

        container:{ 
                
                height:'90%',
                borderColor:'gray',
                justifyContent:'center',
                alignItems:'center',
                borderRadius:12,
        },
        image:{
                height:42,
                width:42,
        },
        content_container:{
                alignItems:'center',
                justifyContent:'center'
        }

})


export default ImagePickerTrigger;