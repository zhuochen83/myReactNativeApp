import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import JobForm from './JobForm'
import { jobURI } from '../config.json'

class EditJob extends React.Component {

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
        job={this.props.job}
        buttonText='Save'
        onSubmit={this.editJob}
        loading={this.state.loading}
      />
    );
  }
}

const mapStateToProps = state => {
  const routes = state.nav.routes;
  if (routes[routes.length-1].params) {
    return {
      job: routes[routes.length-1].params.job,
    }
  }
}

export default connect(mapStateToProps)(EditJob);