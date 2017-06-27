import React, {PropTypes} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import JobForm from './JobForm'
import { jobURI } from '../config.json'

export default class EditJob extends React.Component {

  constructor(props) {
    super(props)
    this.editJob = this.editJob.bind(this);
    this.state = {loading:false}
  }

  editJob(job) {
    this.setState({loading: true})
    const url = `${jobURI}/${job.id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    })
      .then(() => {
        this.setState({loading: false})        
        this.props.navigation.navigate('Jobs')
      })
      .catch((error) => {
        this.setState({error, loading: false});
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

EditJob.contextTypes = {
  apiURL: PropTypes.string
};