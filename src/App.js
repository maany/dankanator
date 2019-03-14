import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import {words, colors} from './package.json';
import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    dank_word: "Tap that Baby! Oh Yeah!",
    bg: "red",
    fonts_loaded: false
  };
  async componentDidMount() {
    ttt= await Font.loadAsync({
      'chivo_bold': require('./assets/fonts/Chivo-Bold.ttf')
    });
    this.setState({fonts_loaded: "true"})
    console.log(ttt)
  }
  constructor(){
    super()
    
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
           {
             this.state.fonts_loaded ? 
              <Text style={[styles.text, styles.text_font]}>
                {this.state.dank_word}
              </Text>
              : <Text style={[styles.text]}>
                {this.state.dank_word}
                </Text>
           }
            
          
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
    transform: [{ rotate: '-45deg'},]
  },
  text_font: {
    fontFamily: 'chivo_bold',
    fontSize: 60
  }
});
