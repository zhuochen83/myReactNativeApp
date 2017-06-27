import React, {PropTypes} from 'react';
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
      return (
        <JobForm
          loading={this.state.loading}
          buttonText='Create'
          onSubmit={this.createJob}
        />
      );
  }
}

CreateJob.contextTypes = {
  apiURL: PropTypes.string
};
