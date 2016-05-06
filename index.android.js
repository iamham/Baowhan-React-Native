/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Baowhan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </View>
        <View style={styles.chart}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#184c71',
  },
  content: {
    marginTop: 10,
  },
  welcome: {
    color: '#fff',
  },
});

AppRegistry.registerComponent('Baowhan', () => Baowhan);
