/**
 * Created by rogue on 2018/1/19.
 */

import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class RLoginViewController extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.viewCenter}></View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },

  viewCenter: {
    width: 40,
    height: 40,
    backgroundColor: "orange"
  },

  leftText: {
    fontSize: 20,
    color: 'orange',
  }

})