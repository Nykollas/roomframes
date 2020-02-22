import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

class Section extends Component {
    constructor(props) {
        super(props);
    }

    render = () => {

        const { borderBottom } = this.props;

        return (<View style={borderBottom ? defaultStyles.container : [defaultStyles.container, {borderBottomWidth:0}]}>
                    <Text style={defaultStyles.title}>{this.props.title}</Text>
                    <TextInput style={defaultStyles.input_text}>{this.props.text}</TextInput>
                </View>);
    }
}

Section.defaultProps = {
    borderBottom: true
};


Section.propTypes = {
    borderBottom: PropTypes.bool
};


const defaultStyles = StyleSheet.create({
    container:{
        flex:0,   
        borderStyle:"solid",
        borderBottomWidth:1,
        borderColor:'#777777aa',
        paddingHorizontal:16,
        marginTop:8        
    },
    title:{
        color:'#5192fffc',
        fontSize:16,
        fontWeight:"bold"
    },
    input_text:{
        fontSize:18,
        paddingHorizontal:0,
        marginHorizontal:0,
        fontWeight:'bold'
      
    }
})

export default Section;