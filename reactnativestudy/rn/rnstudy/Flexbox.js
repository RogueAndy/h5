/**
 * Created by rogue on 2018/1/16.
 */

// import React, { Component } from 'react';
// import { View } from 'react-native';
// export default class FlexDirectionBasics extends Component {
//   render() {
//     return (
//       // 尝试把`flexDirection`改为`column`看看
//       <View style={{flex: 1, flexDirection: 'column'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

// import React, { Component } from 'react';
// import { View } from 'react-native';
// export default class JustifyContentBasics extends Component {
//   render() {
//     return (
//       // 尝试把`justifyContent`改为`center`看看
//       // 尝试把`flexDirection`改为`row`看看
//       // justifyContent: flex-start、center、flex-end、space-around以及space-between
//       <View style={{
//         flex: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// };

import React, { Component } from 'react';
import { View } from 'react-native';
export default class AlignItemsBasics extends Component {
  render() {
    return (
      // 尝试把`alignItems`改为`flex-start`看看
      // 尝试把`justifyContent`改为`flex-end`看看
      // 尝试把`flexDirection`改为`row`看看
      // alignItems flex-start、center、flex-end以及stretch。
      // 要使stretch选项生效的话，子元素在次轴方向上不能有固定的尺寸。
      // 以下面的代码为例：只有将子元素样式中的width: 50去掉之后，alignItems: 'stretch'才能生效。
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
};