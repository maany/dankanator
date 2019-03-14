/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {words} from './package.json';
import Tts from 'react-native-tts';

type Props = {};



export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { bg: "#f00", };
    Tts.speak('Hello, world!');
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.setState({bg:"#0f0"})}>
        <View style={[styles.container, {backgroundColor: this.state.bg}]}>
          <Text>{words[0]}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
