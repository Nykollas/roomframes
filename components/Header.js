import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import SaveButton from './SaveButton';
import BackButton from './BackButton';

class Header extends Component{
    constructor(props){
        super(props);
    }
    c
    render = () => {
        const  { backButton, saveButton } = this.props;
        return(
            <View style={styles.container}>
                {backButton ? <BackButton/> : <></>}
                <Text style={styles.title}>{this.props.title}</Text>
                {saveButton ? <SaveButton/> : <></>}
            </View>
        )
    }
}

export default Header;

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:48,
        backgroundColor:'white',
        elevation:3,
        alignItems:'center',    
        flexDirection:'row'
    },
    title:{
        color:'#777777',
        fontSize:18,
        fontWeight:'bold',
        flex:1,
        textAlign:'center',
    }
})