import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import CarouselPicker from '../components/CarouselPicker';

class ShowCreate extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        data: null
    }

    componentDidMount = () => {
        const { route } = this.props;
        if (route) {
            const { data } = this.props.route;
            if(data)
                this.setState({ data: data.imgs });
            else{
                this.setState({ data: [""] });
            }
        }
    }

    render = () => {
        const { data, title, date}  = this.state;
        return (<View style={styles.container}>
                { data ?
                    <CarouselPicker  entries={data}/>
                    :
                    <View></View>
                }
                
        </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});


export default ShowCreate;
