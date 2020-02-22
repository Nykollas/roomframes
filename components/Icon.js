import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    BackHandler
} from 'react-native';

const search = require("../assets/images/search.png");
const search_active = require("../assets/images/active_search.png");
const squares = require("../assets/images/squares.png");
const squares_active = require("../assets/images/active_squares.png");
const create = require("../assets/images/plus_circle.png");
const close = require("../assets/images/close.png");
const back = require("../assets/images/back.png");

class Icon extends Component{

    constructor(props){
        super(props);
    }
    
    getContainerStyle = () => {
        const {name} = this.props;
        
        if(name == "active-squares" || name == "active-search"){
            return  {
                alignItems:'center',
                justifyContent:'center',  
                borderBottomWidth:4,
                borderStyle:"solid",
                borderColor:'#5192fffc',
                paddingBottom:12
            }
        }else{
            return  {
                alignItems:'center',
                justifyContent:'center',  
            }
        }
    }

    getIcon = () => {
        const {name} = this.props;
        if(name == "active-squares"){
            return squares_active;
        }else if(name == "squares"){
            return squares;
        }else if(name == "search"){
            return search;
        }else if(name == "active-search"){
            return search_active;
        }else if(name == "close"){
            return close;
        }else if(name == 'back'){
            return back;
        }
        else{
            return create;
        }
        
    }

    render = () => {
        
        return(
            <View style={this.getContainerStyle()}>
                <Image  style={this.props.style ? this.props.style : defaultStyles.icon} resizeMode={"contain"} source={this.getIcon()}></Image>
            </View>
        )
    }
}

const defaultStyles = StyleSheet.create({
    icon:{
        height:16,
        width:16
    }
});


export default Icon;
