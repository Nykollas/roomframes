import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import Carousel from '../components/Carousel';

class ShowSearch extends Component {
    constructor(props){
        super(props);
    }

    state  = {
        data:null
    }

    componentDidMount = () => {
        
        const data = this.props.route.params.data;
        this.setState({data:data.imgs});
    }

    render = () => {
        const { data, title, date}  = this.state;
        return (<View style={styles.container}>
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
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',  },

});


export default ShowSearch;
