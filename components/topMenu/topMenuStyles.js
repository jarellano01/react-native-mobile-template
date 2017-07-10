import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    topMenu: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: 100,
        width: '100%',
        backgroundColor: 'grey',
        zIndex: 100,
        //top padding to account for the iphone status bar
        paddingTop: 15
    }
});