import Rx, { Observable } from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax'
import { NavigationActions } from 'react-navigation'
import { combineEpics } from 'redux-observable'
import { jobURI } from '../config.json'

const loadJobsEpic = action$ =>
  action$.ofType('LOAD_JOBS')
    .switchMap(action =>
      ajax(jobURI)
        .map(e => e.response)
        .map(data => ({
          type: 'LOAD_JOBS_SUCCESS',
          data
        }))
        .catch(error => {
          console.log("Fail to fetch jobs", error)
        })          
    )

const createJobEpic = action$ =>
  action$.ofType('CREATE_JOB')
    .switchMap(action =>
      ajax({ url: jobURI, method: 'POST', 
      headers: { 'Content-Type': 'application/json'}, body: action.job})
        .map(e => e.response)
        .flatMap(job => 
          Observable.concat(
            Observable.of({ type: 'CREATE_JOB_SUCCESS', job }),
            Observable.of(NavigationActions.back())
          )
        )
        .catch(error => {
          console.log("Fail to save job", error)
          return Observable.of({ type: 'ERROR', error: "Fail to save job" })          
        })        
    )

const editJobEpic = action$ =>
  action$.ofType('EDIT_JOB')
    .switchMap(action =>
      ajax({ url: `${jobURI}/${action.job.id}`,
                  method: 'PUT',
                  headers: { 'Content-Type': 'application/json'},
                  body: action.job})
        .map(e => e.response)
        .flatMap(job => 
          Observable.concat(
            Observable.of({ type: 'EDIT_JOB_SUCCESS', job }),
            Observable.of(NavigationActions.back())
          )        
        )
        .catch(error => {
          console.log("Fail to save job", error)
          return Observable.of({ type: 'ERROR', error: "Fail to edit job" })
        })        
    )    

const deleteJobEpic = action$ =>
  action$.ofType('DELETE_JOB')
    .switchMap(action =>
      ajax({ url: `${jobURI}/${action.job.id}`, method: 'DELETE', body: action.job})
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
  createJobEpic,
  editJobEpic,
  deleteJobEpic
)

export default rootEpic