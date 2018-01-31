/**
 * Created by rogue on 2018/1/17.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavigatorIOS, Text, TouchableHighlight, View, TouchableOpacity } from 'react-native';

export default class NavigatorIOSApp extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene',

        }}
        style={{flex: 1}}
      />
    )
  }
}

class MyScene extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   navigator: PropTypes.object.isRequired,
  // }

  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
    this.refreshMyView = this.refreshMyView.bind(this);
  }

  refreshMyView(msg) {
    alert(msg);
  }

  _onForward() {
    this.props.navigator.push({
      title: 'Scene',
      component: MySceneS,
      passProps: {
        myProp: 'foo',
        callback: this.newFunctionCallback.bind(this)
      }
    });
  }

  newFunctionCallback() {
    alert('回调')
  }

  render() {
    return (
      <View style={{alignItems: 'center', top: 100}}>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableOpacity onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableOpacity>
      </View>
    )
  }

}




class MySceneS extends Component {
  // static propTypes = {
  //   title: PropTypes.string.isRequired,
  //   navigator: PropTypes.object.isRequired,
  // }
  //
  constructor(props, context) {
    super(props, context);
    this._onBack = this._onBack.bind(this);
    this._callback = this._callback.bind(this);
  }

  _onBack() {

    // this.props.showAlert();
    this.props.navigator.pop();
    if(this.props.callback) {
      this.props.callback();
    }

  }

  _callback() {
    if(this.props.callback) {
      this.props.callback();
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', top: 100}}>

        <Text>我就是说嘛</Text>
        <Text>我就是说嘛</Text>
        <Text>我就是说嘛</Text>

        <TouchableOpacity onPress={this._onBack}>
          <Text>返回点击{this.props.myProp}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._callback}>
          <Text>返回点击2222{this.props.myProp}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}