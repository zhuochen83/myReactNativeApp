import React, {PropTypes} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import JobForm from './JobForm'
import { jobURI } from '../config.json'

export default class CreateJob extends React.Component {

  constructor(props) {
    super(props)
    this.createJob = this.createJob.bind(this);
    this.state = {loading:false}
  }

  createJob(job) {
    this.setState({loading: true})
    fetch(jobURI, {
      method: 'POST',
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
        this.setState({error});
      });      
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator 
            style={{width: '100%', height: '100%'}}
            size='large'/>;
    } else {
      return (
        <JobForm
          buttonText='Create'
          onSubmit={this.createJob}
        />
      );
    }
    
  }
}

CreateJob.contextTypes = {
  apiURL: PropTypes.string
};
