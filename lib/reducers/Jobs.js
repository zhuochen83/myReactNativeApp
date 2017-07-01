import {Alert} from 'react-native';
import { indexedArray } from '../utils'

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
        data: indexedArray('id')(action.data)
      }
    case 'CREATE_JOB':
      return {
        ...state,
        job: action.job
      }
    case 'CREATE_JOB_SUCCESS': {
      const newData = Object.assign({}, state.data)
      newData[action.job.id] = action.job
      return {
        ...state,
        data: newData,
        job: null
      }          
    }
    case 'EDIT_JOB':
      return {
        ...state,
        job: action.job,
      }
    case 'EDIT_JOB_SUCCESS':{
      const newData = Object.assign({}, state.data)
      newData[action.job.id] = action.job
      return {
        ...state,
        data: newData
      }      
    }
    case 'DELETE_JOB':
      return {
        ...state,
        job: action.job,
      }
    case 'DELETE_JOB_SUCCESS':
      delete state.data[action.job.id]
      return {
        ...state,
        data: state.data,
        job: null,
      }
    case 'ERROR':
      Alert.alert(action.error)
      return {
        ...state,
        error: action.error
      }             
    default:
      return state
  }
}
