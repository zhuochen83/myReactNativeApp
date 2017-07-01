import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import JobListContainer from '../components/JobListContainer'
import { loadJobs } from '../actions'

class Jobs extends Component {

  createJob() {
    this.props.dispatch(NavigationActions.navigate({routeName: 'CreateJob'}))
  }

  componentDidMount() {
    this.props.dispatch(loadJobs())
  }

  render() {
    return (
      <View style={styles.container}>
        <JobListContainer/>
        <View style={styles.footer}>
          <Button
          title={'Create Job'}
          onPress={() => this.createJob()}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    padding: 10
  }
});

export default connect()(Jobs);