import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {words} from './package.json';

export default class App extends React.Component {
  render() {
    
    return (
      <View style={styles.container}>
        <Text>{words[0]}</Text>
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
