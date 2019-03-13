import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {words} from './package.json';
import { Button } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super()
    this.state = {
      dank_word: "Press the button"
    }
  }
  dank = () => {
    var dank_list = [
    "dank",
    "hot shit",
    "fire",
    "holy shit",
    "bonkers",
    "bananas",
    "labradoodles"
    ]
    var dank_word = dank_list[Math.floor(Math.random()*dank_list.length)]
    return dank_word
  }
  set_dank_word = () => {
    this.setState({dank_word: this.dank()})
  }
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.dank_word}
        </Text>
        <Button
          onPress={this.set_dank_word}
          title="Spit em Rhymes!"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
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
