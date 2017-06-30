import { connect } from 'react-redux'
import JobForm from './JobForm'
import { createJob } from '../actions'

const mapStateToProps = state => ({
  buttonText: 'Create',
})

const dispatchToProps = dispatch => {
  return {
    onSubmit: (job) => dispatch(createJob(job))
  }
}

export default connect(mapStateToProps, dispatchToProps)(JobForm)