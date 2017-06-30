import Rx from 'rxjs'
import { combineEpics } from 'redux-observable';
import { jobURI } from '../config.json'

const loadJobsEpic = action$ =>
  action$.ofType('LOAD_JOBS')
    .switchMap(action =>
      Rx.Observable.ajax(jobURI)
        .map(e => e.response)
        .map(data => ({
          type: 'LOAD_JOBS_SUCCESS',
          data
        }))
        .catch(error => {
          console.log("Fail to fetch jobs", error)
        })          
    )

const saveJobEpic = action$ =>
  action$.ofType('CREATE_JOB')
    .switchMap(action =>
      Rx.Observable.ajax({ url: jobURI, method: 'POST', body: action.job})
        .map(e => e.response)
        .map(job => ({
          type: 'CREATE_JOB_SUCCESS',
          job
        }))
        .catch(error => {
          console.log("Fail to save job", error)
        })        
    )

const deleteJobEpic = action$ =>
  action$.ofType('DELETE_JOB')
    .switchMap(action =>
      Rx.Observable.ajax({ url: `${jobURI}/${action.job.id}`, method: 'DELETE', body: action.job})
        .map(e => e.response)
        .map(job => ({
          type: 'DELETE_JOB_SUCCESS',
          job: action.job
        }))
        .catch(error => {
          console.log("Fail to delete job", error)
        })
    )   

const rootEpic = combineEpics(
  loadJobsEpic,
  saveJobEpic,
  deleteJobEpic
)

export default rootEpic