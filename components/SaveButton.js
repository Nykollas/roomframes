import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';


class SaveButton extends Component {

    render = () => {
        
        return (<View style={styles.container}>
                    <Text style={styles.text}>Save</Text>
                </View>)
        }   
}

const styles = StyleSheet.create({
    text:{
        fontSize:16,
        color:'#1ef7b6',
    },
    container:{
        flex:0,
        alignItems:'flex-end',
        justifyContent:'center',
        marginRight:20,
    }
})


export default SaveButton;