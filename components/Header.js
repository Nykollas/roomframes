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
    
    render = () => {
        const  { backButton, saveButton, saveButtonCallback, screen, title } = this.props;
        return(
            <View style={styles.container}>
                {backButton ? <BackButton screen={screen} /> : <></>}
                <Text style={styles.title}>{title}</Text>
                {saveButton ? <SaveButton onPress={saveButtonCallback}/> : <></>}
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