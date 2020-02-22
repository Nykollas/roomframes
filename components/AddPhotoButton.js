import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Image from '../components/Image';
import {useNavigation} from "@react-navigation/native";
import defaultImage from '../assets/images/addphotobutton.png';




class AddPhotoButton extends Component{

    state = {
        selected:false,
        img:undefined
    }

    render = () => {
        
        const {selected, img} = this.state;
        const { navigation } = this.props;

        return(
            <View style={styles.container}>
        {selected ?
        
            
                <TouchableOpacity onPress={() => {navigation.navigate("AddPhoto")}}>
                    <Image resizeMode={"cover"} style={styles.img} img={img}></Image>
                </TouchableOpacity>   
        :
                <TouchableOpacity onPress={() => {navigation.navigate("AddPhoto")}}>
                    <Image resizeMode={"cover"} style={styles.img} img={defaultImage}></Image>
                </TouchableOpacity>
            
        }
        </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        height: 180,
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    img:{
        width:'100%',
    }
})

export default function AddPhotoButtonContainer(props){
        const navigation = useNavigation();
        console.log(navigation);
        return <AddPhotoButton {...props} navigation={navigation}></AddPhotoButton>
}