/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {words, colors} from './package.json';
import Tts from 'react-native-tts';
type Props = {};


export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      dank_word: "Tap that Baby! Oh Yeah!",
      bg: "#F00",
      fonts_loaded: false
    };
  }
  
  async componentDidMount() {
    // ttt= await Font.loadAsync({
    //   'chivo_bold': require('./assets/fonts/Chivo-Bold.ttf')
    // });
    // this.setState({fonts_loaded: "true"})
    // console.log(ttt)
  }
  
  colorify = () => {
    var dank_color = colors[Math.floor(Math.random()*colors.length)]
    return dank_color
  }
  dankify = () => {
    var dank_word = words[Math.floor(Math.random()*words.length)]
    Tts.speak(dank_word);
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
           
              <Text style={[styles.text]}>
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
  text: {
    fontFamily: 'Chivo-Bold',
    transform: [{ rotate: '-45deg'},],
    fontSize: 60
  }
});
