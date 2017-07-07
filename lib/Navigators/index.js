import React from 'react'
import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'

import JobsPage from '../tabs/Jobs'
import CreateJob from '../components/CreateJobContainer'
import EditJob from '../components/EditJobContainer'
import BrowseJobPage from '../tabs/BrowseJob'

const MyJobNavigator = StackNavigator({
  Jobs: {
    screen: JobsPage,
    navigationOptions: {
      title: 'My Jobs'
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
},
{
    tabBarLabel: 'My Jobs',
    tabBarIcon: <Icon name='account-circle'/>
});

const BrowseJobNavigator = StackNavigator({
  BrowseJobs: {
    screen: BrowseJobPage,
    navigationOptions: {
      title: 'Browse'
    }
  },
});

export const AppNavigator = TabNavigator({
  Browse: {
    screen: BrowseJobNavigator,
  },
  MyJobs: {
    screen: MyJobNavigator,
  }, 
}, {
  tabBarOptions: {
    activeBackgroundColor: '#4286f4',
    activeTintColor: '#fff',
    labelStyle: {
      fontSize: 14,
    },
  },
});


const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);