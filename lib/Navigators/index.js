import React from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

import JobsPage from '../pages/Jobs'
import CreateJob from '../components/CreateJobContainer'
import EditJob from '../components/EditJobContainer'

export const AppNavigator = StackNavigator({
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

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);