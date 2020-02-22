import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';




class TagsSection extends Component {
    render = () => {
        return (
            
            <View style={styles.container}>
            <Text style={styles.title}>{"Tags"}</Text>
            <View style={styles.tags_container}>
                <View style={styles.tag}>
                    <Text style={styles.tag_text}>tag</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.tag_text}>hello</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.tag_text}>think</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.tag_text}>tag</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.tag_text}>hello</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.tag_text}>think</Text>
                </View>
                <View style={styles.tag}>
                    <Text style={styles.tag_text}>think</Text>
                </View>
            </View>
            </View>
        )
    }
}




const styles = StyleSheet.create({
    container:{
        borderColor:'gray',
        borderStyle:'solid',
        borderBottomWidth:1,
        
    },
    tags_container: {
        flexDirection:'row',
        flexWrap:'wrap',
        paddingLeft:16,
        marginBottom:16,
    },
    tag: {
        borderRadius: 12,
        elevation: 3,
        backgroundColor: '#007affff',
        alignSelf:'flex-start',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:20,
        paddingVertical:4,
        marginRight:8,
        marginBottom:8
    },
    tag_text:{
        color:'white',
        fontSize:16,   
    },
    title:{
        color:'#5192fffc',
        fontSize:16,
        fontWeight:"bold",
        marginLeft:16,
        marginBottom:16,
        marginTop:12
    },
})


export default TagsSection;
