export default (state = {data: [], loading: false}, action) => {
  switch (action.type) {
    case 'LOAD_JOBS':
      return {
        ...state,
        loading: true
      }
    case 'LOAD_JOBS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case 'CREATE_JOB':
      return {
        ...state,
        job: action.job
      }
    case 'CREATE_JOB_SUCCESS':
      return {
        ...state,
        data: state.data.slice().push(action.job)
      }          
    case 'EDIT_JOB':
      return {
        ...state,
        job: action.job,
      }
    case 'DELETE_JOB':
      return {
        ...state,
        job: action.job,
      }   
    default:
      return state
  }
}
