import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class ImageBackgroundBlock extends Component {
    constructor(props) {
        super(props);
    }
    render = () => {
        const { style, resizeMode, img_url, img, title } = this.props;
        const source = img ? img : {uri:img_url};

        return (

            <View style={style ? style : defaultStyles.container}>
                <ImageBackground imageStyle={defaultStyles.img}
                    resizeMode={resizeMode}
                    style={style ? [defaultStyles.img_bcg, { width: '100%' }] : defaultStyles.img_bcg}
                    source={source}>
                    <Text style={defaultStyles.text}>{title}</Text>
                </ImageBackground>
            </View>

        );
    }
}

const defaultStyles = StyleSheet.create({
    container: {
        height: '100%',
        width: wp('50%') - 16,
        elevation: 4,
    },
    img_bcg: {
        height: '100%',
        width: wp('50%') - 16,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
    },
    img: {
        borderRadius: 18,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 1,
        textShadowColor: '#0009',
    }
})


export default ImageBackgroundBlock;