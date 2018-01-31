/**
 * Created by rogue on 2018/1/17.
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class RNHighScores extends Component {
  render() {
    var contents = this.props['scores'].map(
      score => <Text key={score.name}>{score.name}:{score.value}</Text>
    );

    return(
      <View style={styles.container}>
        <Text style={styles.heightScoresTitle}>2048 High Scores!</Text>
        <Text style={styles.scores}>{contents}</Text>
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
  heightScoresTitle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  scores: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})