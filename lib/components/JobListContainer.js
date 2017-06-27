import React, { Component, PropTypes } from 'react';
import JobList from './JobList';
import { jobURI } from '../config.json'

export default class JobListContainer extends Component {
  state = {
    data: [],
    loading: false,
    error: null
  };

  requestData() {
    this.setState({loading: true})
    fetch(jobURI)
      .then(resp => resp.json())
      .then((data) => {
        this.setState({
          error: data.error || null,
          data, loading: false});
      })
      .catch(error => {
      console.log(`Error occured while fetching ${URL}`, error);
      this.setState({error, loading: false});
    })
  }

  deleteJob(job) {
    const url = `${jobURI}/${job.id}`
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(() => {
        this.requestData();
      });
  }

  componentDidMount() {
    this.requestData();
  }

  render() {
    return <JobList
            loading={this.state.loading}
            data={this.state.data}
            onItemLongPress={(job) => this.deleteJob(job)}
            onItemPress={(job) => this.props.navigation.navigate('EditJob', {job})} />
            
  }
}