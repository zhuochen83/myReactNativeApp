export const deleteJob = (job) => ({ type: 'DELETE_JOB', job })

export const deleteJobSuccess = (job) => ({ type: 'DELETE_JOB_SUCCESS', job })

export const loadJobs = () => ({ type: 'LOAD_JOBS' })

export const loadJobsSuccess = (jobs) => ({ type: 'LOAD_JOBS_SUCCESS', jobs })

export const createJob = (job) => ({ type: 'CREATE_JOB', job })

export const createJobSuccess = (job) => ({ type: 'CREATE_JOB_SUCCESS', job })

export const editJob = (job) => ({ type: 'EDIT_JOB', job })

export const editJobSuccess = (job) => ({ type: 'EDIT_JOB_SUCCESS', job })


