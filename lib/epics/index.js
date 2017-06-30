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
        })
    ))

const saveJobsEpic = action$ =>
  action$.ofType('CREATE_JOB')
    .switchMap(action =>
      Rx.Observable.ajax({ url: jobURI, method: 'POST', body: action.job})
        .map(e => e.response)
        .map(job => ({
          type: 'CREATE_JOB_SUCCESS',
          job
        })
    ))

const rootEpic = combineEpics(
  loadJobsEpic,
  saveJobsEpic
)

export default rootEpic