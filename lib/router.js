import React from 'react'
import { StackNavigator } from 'react-navigation'

import JobsPage from './pages/Jobs'
import CreateJob from './components/CreateJob'
import EditJob from './components/EditJob'


export const JobStack =  new  StackNavigator({
  Jobs: {
    screen: JobsPage,
    navigationOptions: {
      title: 'Jobs'
    }
  },
  CreateJob: {
    screen: CreateJob,
        navigationOptions: {
      title: 'Create Job'
    }
  },
  EditJob: {
    screen: EditJob,
        navigationOptions: {
      title: 'Edit Job'
    }
  }
});