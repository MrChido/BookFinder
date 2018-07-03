import React from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView, } from 'react-native';
var S = require('../../styles/Styles');
export default class Tbar extends React.Component {
   static defaultProps ={
       title:'BookFinder'
   } 
    render() {
    return (
      <View style={styles.toolbarview}>    
        <Text style={styles.toolbartext}>
        {this.props.title}</Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
    toolbarview:{
        backgroundColor: 'rgb(66,61,53)',
        padding: 10,
        marginTop: 25,
    },
    toolbartext:{
        color:'rgb(246,243,237)',
        textAlign:'center',
    },
    
});

AppRegistry.registerComponent('Tbar', ()=> Tbar);
