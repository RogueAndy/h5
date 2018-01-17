/**
 * Created by rogue on 2018/1/17.
 */

import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
    <View style={{padding: 10}}>
      <TextInput style={{height: 40}} placeholder="type here to translate!" onChangeText={(text) => this.setState({text: text})}></TextInput>
      <Text style={{padding: 10, fontSize:42}}>
        {this.state.text.split(' ').map((word) => word && '披萨').join(' ')}
      </Text>
    </View>
    )
  }
}