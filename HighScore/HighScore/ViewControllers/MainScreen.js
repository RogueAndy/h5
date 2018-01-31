/**
 * Created by rogue on 2018/1/17.
 */

import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';

class MainScreen extends Component {
  static navigationOptions = {
    title: 'WelCome',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button title="Go to Jane's profile MainScreen" onPress={() => navigate('Profile', {name: 'Jane'})}></Button>
    )
  }
}