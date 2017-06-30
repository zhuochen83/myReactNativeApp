import { connect } from 'react-redux'
import JobList from './JobList'
import handleLoading from './HOC/handleLoading'

const mapStateToProps = state => ({
  loading: state.jobs.loading,
  data: state.jobs.data
})

export default connect(mapStateToProps)(JobList)