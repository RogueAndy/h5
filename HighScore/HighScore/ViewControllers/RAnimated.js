/**
 * Created by rogue on 2018/1/18.
 */

import React, {Component} from 'react';
import {Animated, Text} from 'react-native';

class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    };
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer)
  }

  componentDidMount() {

    alert('dwaw');
    console.log('zljzljzljzljzljzljzljzlj');
    // this.timer = setTimeout(() => {
    //   Console.log('的点点滴滴多');
    // }, 500)

    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 3000
    }).start();
  }

  render() {
    return(
      <Animated.View style={{...this.props.style, opacity: this.state.fadeAnim}}>
        {this.props.children}
      </Animated.View>
    )
  }
}

export default class RAnimation extends Component {
  render() {
    return (
      <FadeInView style={{width: 250, height: 50, top: 100, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      </FadeInView>
    )
  }
}