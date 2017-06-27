import React, {Component, PropTypes} from 'react'
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import JobListContainer from '../components/JobListContainer'

class Jobs extends Component {

  getChildContext() {
    return {navigation: this.props.navigation};
  }

  createJob() {
    this.props.navigation.navigate('CreateJob')
  }

  render() {
    return (
      <View style={styles.container}>
        <JobListContainer navigation={this.props.navigation}/>
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

Jobs.childContextTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    padding: 10
  }
});

export default Jobs;