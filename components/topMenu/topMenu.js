import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './topMenuStyles';

export default class Header extends Component {
    render(){
        return (
            <View style={styles.topMenu}>
                {this.props.children}
            </View>
        )
    }
}