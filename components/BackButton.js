import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


function BackButton(){
        

        const navigation = useNavigation();
        return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.goBack() }>
                    <Image
                           style={styles.image}
                           resizeMode="contain"
                           source={require("../assets/images/back.png")}/>
                    </TouchableOpacity>
                </View>
                )
                
            
}

const styles = StyleSheet.create({
    container:{
        flex:0,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10
    },
    image:{
        width:20,
        height:20,
        alignItems:'center',
        justifyContent:'center'
    
    }
})
export default BackButton;