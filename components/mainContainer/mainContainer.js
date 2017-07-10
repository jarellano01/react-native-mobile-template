import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from './mainContainerStyles';


export default class Body extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                {this.props.children}
            </View>
        )
    }
}