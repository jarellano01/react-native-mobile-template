import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomMenu from "./components/bottomMenu/bottomMenu";
import TopMenu from './components/topMenu/topMenu';
import MainContainer from './components/mainContainer/mainContainer';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <TopMenu>
              <Text>
                  Here you can put anything you like. Remember to stay within the height constraints.
              </Text>
          </TopMenu>
          <MainContainer>
              <Text>
                  This is the body where you can put any content.
              </Text>
          </MainContainer>
          <BottomMenu>
              <Text>
                  This is usually the bottom nav with convenient links. If you are using react-router you could place links in here to different pages.
              </Text>
          </BottomMenu>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
