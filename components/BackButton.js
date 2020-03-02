import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';


const onPress = (screen, navigation) => {
    if(screen && screen != ""){
        navigation.navigate(screen);
    }else{
        navigation.goBack();
    }
}

function BackButton(props){
        

        const navigation = useNavigation();
        const { screen } = props;
        return (
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => onPress(screen, navigation) }>
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