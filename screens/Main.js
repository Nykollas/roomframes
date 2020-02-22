import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    ScrollView
} from 'react-native';
import PropTypes from 'prop-types';

import { Col, Row, Grid } from "react-native-easy-grid";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Image from '../components/Image';

import data from '../data/data';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        leftSide: null,
        rightSide: null,
        max: null
    }

    col_one_data = {}
    col_two_data = {}

    divideColumns = () => {
        const { filter } = this.props;
        let memorys = data
        memorys = Object.values(memorys);
        if(filter)
            this.filter(filter,memorys);
        var half_length = Math.ceil(memorys.length / 2);
        var leftSide = memorys.slice(half_length);
        var rightSide = memorys.slice(0, half_length);
        const max = Math.max(leftSide.length, rightSide.length);
        this.setState({ leftSide: leftSide, rightSide: rightSide, max: max });
    }

    filter = (string, data) => {
        data.map((value, index, data) => {
            const dist = this.levenshtein(string, value.title);
            value.dist = dist;
        });
        data.sort((a, b) => (a.dist > b.dist) ? 1 : -1);
    }

    levenshtein = (a, b) => {
        if (a.length === 0) return b.length
        if (b.length === 0) return a.length
        let tmp, i, j, prev, val, row
        if (a.length > b.length) {
          tmp = a
          a = b
          b = tmp
        }
        row = Array(a.length + 1)
        for (i = 0; i <= a.length; i++) {
          row[i] = i
        }
        for (i = 1; i <= b.length; i++) {
          prev = i
          for (j = 1; j <= a.length; j++) {
            if (b[i-1] === a[j-1]) {
              val = row[j-1] 
            } else {
              val = Math.min(row[j-1] + 1, 
                    Math.min(prev + 1,     
                             row[j] + 1))  
            }
            row[j - 1] = prev
            prev = val
          }
          row[a.length] = prev
        }
        return row[a.length]
      }

      

    componentDidMount = () => {

        this.divideColumns();
        
    }

    renderCol = (value, index, arr) => {

        const { max } = this.state;        
        const {navigation, screen } = this.props;
        if (index < max - 1 || arr.length == max) {
            return(<Row style={styles.row}>
                        <TouchableOpacity onPress={() => {navigation.navigate(screen,{data:value})}}>
                            <Image img_url={value.img_url} title={value.title}></Image>
                        </TouchableOpacity>
                   </Row>
            )
        } else {
            
            return(
                <Row style={styles.row}>
                </Row>
            )
        }
        
    }

    render = () => {

        
        return (
            <ScrollView style={styles.main_container}>
                {this.state.leftSide && this.state.rightSide ?
                    <Grid>
                        <Col style={styles.col_left}>
                            {
                                this.state.rightSide.map(this.renderCol)
                            }
                        </Col>
                        <Col style={styles.col_right}>
                            {
                                
                                this.state.leftSide.map(this.renderCol)
                            }
                        </Col>
                    </Grid>
                    :
                    <></>
                }
            </ScrollView>
        );
    }
}

Main.propTypes = {
    screen:PropTypes.string,
}

Main.defaultProps = {
    screen:'Show'
}

const styles = StyleSheet.create({
    row: {
        height: hp("25%"),
        width: wp('50%') - 16,
        //borderColor:'black',
        //borderStyle:'solid',
        //borderWidth:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
    },
    main_container: {
        height: hp('100%')
    },
    col_right: {
        marginVertical: 8,
        paddingRight: 8,
        paddingLeft: 4,
        borderColor: 'black',
        borderStyle: 'solid',
    },
    col_left: {
        marginVertical: 8,
        justifyContent: 'center',
        paddingRight: 4,
        paddingLeft: 8,
    }

})

export default Main;