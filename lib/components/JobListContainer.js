import React, { Component } from 'react';
import JobList from './JobList';
const JOB_URL = 'http://192.168.0.138:3000/api/jobs';

export default class JobListContainer extends Component {
  state = {
    data: [],
    loading: false,
    error: null
  };

  requestData() {
    this.setState({loading: true})
    fetch(JOB_URL)
      .then(resp => resp.json())
      .then((data) => {
        this.setState({
          error: data.error || null,
          data, loading: false});
      }).
    catch(erroe => {
      console.log(`Error occured while fetching ${URL}`, err);
      this.setState({error, loading: false});
    })
  }

  deleteJob(job) {
    const url = `http://localhost:3000/api/Jobs/${job.id}`
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
            data={this.state.data}
            onItemLongPress={(job) => this.deleteJob(job)}
            onItemPress={(job) => this.props.navigation.navigate('EditJob', {job})} />
  }
}