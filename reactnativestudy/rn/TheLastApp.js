/**
 * Created by rogue on 2018/1/16.
 */

import React, { Component } from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name2}</Text>
    );
  }
}

export default class LotsOfGreet extends Component {
  render() {
    return(
      <View style={{alignItems:'center', top:200}}>
        <Greeting name='Rexxar' name2="what"/>
        <Greeting name="Jaina" name2="the"/>
        <Greeting name="Valeera" name2="fuck"/>
      </View>
    )
  }
}