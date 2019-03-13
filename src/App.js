import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {words} from './package.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bg: "#f00", };
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
