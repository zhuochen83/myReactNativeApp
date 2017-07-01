import React, {PropTypes} from 'react';
import { connect } from 'react-redux'
import JobForm from './JobForm'
import { editJob } from '../actions'
import { getNavigation } from '../utils'

const mapStateToProps = state => ({
  job: getNavigation(state).params? getNavigation(state).params.job : null,
  buttonText: 'Save',
})

const dispatchToProps = dispatch => ({
    onSubmit: (job) => {
      console.log('editJob', job)
      dispatch(editJob(job))}
})

export default connect(mapStateToProps, dispatchToProps)(JobForm)