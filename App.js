import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

const styles = StyleSheet.create({

  button: {
  alignItems: 'center',
  justifyContent: 'center',
  width: 150,
  height: 75,
  borderRadius: 1,
  borderStyle: "solid",
  borderWidth: 0.5,
  borderColor: "#3b0ece"
  },

  login: {
    fontFamily: "Arial",
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#3b0ece"
  },

});

export default class HelloWorldApp extends Component {
  render() {
    return (
     <View style={{flex: 1}}>
      <View style={{flex: 3, alignItems: 'center', backgroundColor: '#3b0ece'}}>
         <View style={{top:200}}>
          <Image source={require('./assets/drawable-xxxhdpi/icon.png')} />
         </View>
          </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
       <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
         <Text style={styles.login}>Log In </Text>
       </TouchableOpacity>
      </View>
      </View>
    );
  }
};