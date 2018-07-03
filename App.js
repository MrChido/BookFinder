import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions, ScrollView, } from 'react-native';
import Tbar from './Segments/components/toolbar/tbar';
var S = require('./Segments/styles/Styles');
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
    <Tbar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgb(148,208,234)',
        height: Dimensions.get('window').height
   }
    
});
