import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import JobListContainer from './lib/components/JobListContainer';
import { JobStack } from './lib/router'

export default class App extends React.Component {

  render() {
    return (
      <JobStack/>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
