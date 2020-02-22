import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
} from 'react-native'
import Main from './Main';
import Icon from '../components/Icon';
import IconButton from '../components/IconButton';

class Search extends Component {

    state = {value:null, typying:false}

    hideButton = () => {
        this.setState({typing:false})
    }

    clear = () => {
        this.searchInput.clear();
        this.hideButton();
    }

    setSearchValue = (value) => {
        this.setState({value:value, typing:true})
        this.mainComponent.divideColumns();
    }

    render = () => {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.search_input_container}>
                    <View style={styles.icon_container}>
                        <Icon style={styles.icon} name="search"></Icon>
                    </View>
                    <TextInput 
                               ref = { (component) => {this.searchInput = component}}
                               placeholderTextColor={"gray"}
                               onEndEditing={this.hideButton} 
                               onChangeText={this.setSearchValue}
                               placeholder={"Search"}
                               style={styles.search_input}>
                    </TextInput>
                    <View style={styles.icon_container}>
                        {this.state.typing ? <IconButton onPress={this.clear} style={styles.icon} name="close"></IconButton>:<></>}
                    </View>
                </View>
                <Main screen="ShowSearch" navigation={navigation} ref={(component) => { this.mainComponent = component}} filter={this.state.value} ></Main>    
            </View>
        );
    }
}



const styles = StyleSheet.create({

    search_input:{
        backgroundColor:'#dddddd',
        borderRadius:12,
        fontSize:20,
        flex:1
    },

    search_input_container:{
        height:56,
        flexDirection:'row',
        backgroundColor:'#dddddd',
        borderRadius:12,
        margin:8,
        paddingHorizontal:16,
    },

    container:{
        width:'100%'
    },

    icon_container:{
        marginRight:16,
        marginLeft:8,
        alignItems:'center',
        justifyContent:'center'
    },

    icon:{
        height:18,
        width:18
    }

})

export default Search;