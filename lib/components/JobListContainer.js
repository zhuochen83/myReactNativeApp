import { connect } from 'react-redux'
import JobList from './JobList'
import { loadJobs } from '../actions'

const mapStateToProps = state => ({
  loading: state.jobs.loading,
  data: Object.values(state.jobs.data)
})

const dispatchToProps = dispatch => ({
  onRefresh: () => dispatch(loadJobs())
})

export default connect(mapStateToProps, dispatchToProps)(JobList)