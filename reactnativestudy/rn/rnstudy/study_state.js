/**
 * Created by rogue on 2018/1/16.
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true, searchString: ''};

        // setInterval(() => {
        //     this.setState(previousState => {
        //         return {showText: !previousState.searchStringCurr};
        //     })
        // }, 1000);

        setInterval(() => {
          this.setState({showText: !this.state.showText});
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
          <Text>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
          <View style={{top:150, alignItems:'center'}}>
              <Blink text="i love to blink"/>
              <Blink text="yes blinking is so great"/>
              <Blink text="why did they ever take this out of HTML"/>
              <Blink text="look at me look at me"/>
          </View>
        );
    }
}