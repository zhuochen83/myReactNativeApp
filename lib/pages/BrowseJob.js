import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { StyleSheet, View, Text } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import JobListContainer from '../components/JobListContainer'
import { loadJobs } from '../actions'

class BrowseJob extends Component {

  static navigationOptions = {
    tabBarLabel: 'Browse',
    tabBarIcon: <Icon name='view-list'/>
  };  

  componentDidMount() {
    this.props.dispatch(loadJobs())
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Browse Jobs</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect()(BrowseJob);