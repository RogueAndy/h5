/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// export default class App extends Component<{}> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// import React, { Component } from 'react';
// import { Text } from 'react-native';
//
// export default class App extends Component {
//   render() {
//     return (
//         <Text style={{textAlign:'center', top:200}}>Hello world!</Text>
//     );
//   }
// }

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