import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import JobItem from './JobItem';
import { jobURI } from '../config.json'
import {navEditJob} from '../actions'


class JobItemContainer extends Component {

  onItemEdit(job) {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'EditJob', params: {job} }))
  }

  onItemDelete(job) {
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

  render() {
    return <JobItem 
            item={this.props.item}
            onItemEdit={item => this.onItemEdit(item)}
            onItemDelete={item => this.onItemDelete(item)}/>
  }
}

export default connect()(JobItemContainer)