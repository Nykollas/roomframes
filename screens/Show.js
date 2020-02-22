import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Carousel from '../components/Carousel';


class Show extends Component {
    constructor(props){
        super(props);
    }

    state  = {
        data:null
    }

    componentDidMount = () => {
        const { imgs, title, date } = this.props.route.params.data;
        this.setState({
                       data:imgs,
                       title:title,
                       date:date
                    });
    }

    render = () => {
        const { data, title, date}  = this.state;
        return (
            <View style={styles.container}>
                { data ?
                    <View style={styles.title_container}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.title}>{date}</Text>
                    </View>
                    :
                    <View></View>
                }
                { data ?
                    <Carousel entries={data}/>
                    :
                    <View></View>
                }
                
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container:{
        height:'95%',
        alignItems:'center',
    },
    title_container:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:16
    },
    title:{
        color:'black',
        fontSize:16,
        marginTop:4,
        fontWeight:'bold'
    }

});


export default Show;

