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
      const newData = state.data.slice()
      newData.push(action.job)
      return {
        ...state,
        data: newData
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
    case 'DELETE_JOB_SUCCESS':
      return {
        ...state,
        data: state.data.slice(0,state.data.length - 1),
        job: null,
      }         
    default:
      return state
  }
}
