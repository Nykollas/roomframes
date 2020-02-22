import React, {Component}  from 'react';
import Carousel,{ Pagination }  from 'react-native-snap-carousel';
import {View, ImageBackground, StyleSheet, Dimensions  } from 'react-native';
const dim =  Dimensions.get("screen");
const width = dim.width;
const sliderWidth = width - 16;
const itemWidth = width - 16;

class CustomCarousel extends Component {
    state = {entries:this.props.entries, activeSlide:0}
    get pagination () {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
              dotsLength={entries.length}
              activeDotIndex={activeSlide}
              containerStyle={{ backgroundColor: '#FFFFFF00', height:38, paddingVertical:8, }}
              dotStyle={{
                  width: 16,
                  height: 16,
                  borderRadius: 50,
                  marginHorizontal: 8,
                  backgroundColor: '#007affff'
              }}
              inactiveDotStyle={{
                width: 16,
                height: 16,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: '#007affAA'
              }}
              inactiveDotOpacity={0.4}  
            />
        );
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <ImageBackground 
                                 resizeMode="cover"
                                 imageStyle={styles.img}
                                 style={styles.image}
                                source={{uri:item}}>
                </ImageBackground>
            </View>
        );
    }

    render () {
        return (
            <View style={styles.carousel_container}>
                <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                onSnapToItem={(index) => {this.setState({activeSlide:index})}}
                />
                { this.pagination }
            </View>

        );
    }
}

const styles = StyleSheet.create({
    image:{
        height:'100%',
        width:'100%',
        borderRadius:13,
    },
    img:{
        borderRadius:13 
    },
    carousel_container:{
        paddingTop:8,
        elevation:3,
        
    },
})


export default CustomCarousel;
