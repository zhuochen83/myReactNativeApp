import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import JobForm from './JobForm'

export default class CreateJob extends React.Component {

  constructor(props) {
    super(props)
    this.editJob = this.editJob.bind(this);
  }

  editJob(job) {
    const url = `http://localhost:3000/api/Jobs/${job.id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    })
      .then(() => {
        this.props.navigation.navigate('Jobs')
      });
  }

  render() {
    return (
      <JobForm
        job={this.props.navigation.state.params.job}
        buttonText='Save'
        onSubmit={this.editJob}
      />
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
