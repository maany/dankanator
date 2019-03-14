import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {words, colors} from './package.json';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      dank_word: "Tap that Baby! Oh Yeah!",
      bg: "red"
    }
  }
  colorify = () => {
    var dank_color = colors[Math.floor(Math.random()*colors.length)]
    return dank_color
  }
  dankify = () => {
    var dank_word = words[Math.floor(Math.random()*words.length)]
    return dank_word
  }
  set_dank_color = () => {
    this.setState({bg: this.colorify()})
  }
  set_dank_word = () => {
    this.setState({dank_word: this.dankify()})
  }
  make_it_dank = () => {
    this.setState({dank_word: this.dankify()})
    this.setState({bg: this.colorify()})
  }
  render() {
    return (

      <TouchableWithoutFeedback onPress={this.make_it_dank}>
        <View style={[styles.container, {backgroundColor: this.state.bg}]}>
        <Text style={styles.paragraph}>
          {this.state.dank_word}
        </Text>
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
