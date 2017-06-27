import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import JobForm from './JobForm'

export default class CreateJob extends React.Component {

  constructor(props) {
    super(props)
    this.createJob = this.createJob.bind(this);
  }

  createJob(job) {
    const url = 'http://localhost:3000/api/Jobs'
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    })
      .then(() => {
        this.props.navigation.navigate('Jobs')
      })
      .catch((error) => {
        this.setState({error});
      });      
  }

  render() {
    return (
      <JobForm
        buttonText='Create'
        onSubmit={this.createJob}
      />
    );
  }
}
