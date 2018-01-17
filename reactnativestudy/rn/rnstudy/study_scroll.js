/**
 * Created by rogue on 2018/1/17.
 */

import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
export default class SectionListBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SectionList
          keyExtractor = {this._extraUniqueKey}
          sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})

// import React, {Component} from 'react';
// import {FlatList, StyleSheet, Text, View} from 'react-native';
// export default class FlatListBasics extends Component {
//     render() {
//         return (
//           <View style={styles.container}>
//               <FlatList
//                 data={[
//                     {key: 'Devin'},
//                     {key: 'Jackson'},
//                     {key: 'James'},
//                     {key: 'Joel'},
//                     {key: 'John'},
//                     {key: 'Jillian'},
//                     {key: 'Jimmy'},
//                     {key: 'Julie'}
//                 ]}
//                 renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
//               />
//           </View>
//         )
//     }
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingTop: 22
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44
//     }
// })

// import React, {Component} from 'react';
// import {ScrollView, Image, Text, View} from 'react-native';
// export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
//   render() {
//     return(
//       <ScrollView>
//         <Text style={{fontSize:48}}>Scroll me plz</Text>
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Text style={{fontSize:48}}>If you like</Text>
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Text style={{fontSize:96}}>Scrolling down</Text>
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Text style={{fontSize:48}}>What's the best</Text>
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Text style={{fontSize:48}}>Framework around?</Text>
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Image source={require('./share.png')} />
//         <Text style={{fontSize:48}}>React Native</Text>
//       </ScrollView>
//     )
//   }
// }