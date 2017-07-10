import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './bottomMenuStyles';

export default class BottomMenu extends Component {
    render(){
        return (
            <View style={styles.bottomMenu}>
                {this.props.children}
            </View>
        )
    }
}