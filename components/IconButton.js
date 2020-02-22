import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from './Icon';
import { StyleSheet } from 'react-native';




class IconButton extends Component {
        
        constructor(props){
            super(props);
        }

        render = () => {
            const { style } = this.props;
            return(
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon style={this.props.style ? style : defaultStyle.icon} name={this.props.name}></Icon>
            </TouchableOpacity>)
        }
}

const defaultStyle = StyleSheet.create({
    icon:{
        height:16,
        width:16
    }
})


export default IconButton;