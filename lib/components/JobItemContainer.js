import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import Modal from 'react-native-modal'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation';
import { Button } from 'react-native-elements'
import JobItem from './EditableJobItem';
import { jobURI } from '../config.json'
import {navEditJob, deleteJob} from '../actions'


class JobItemContainer extends Component {

  state = {
    modalVisible: false
  }

  setModalVisible = (visible, onConfirm) => {
    this.setState({modalVisible: visible});
    this.onModalConfirm = onConfirm
  }

  onItemEdit(job) {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'EditJob', params: {job} }))
  }

  deleteItem(job) {
    this.props.dispatch(deleteJob(job))
  }

  render() {
    return (
        <View>
          <JobItem 
            item={this.props.item}
            onItemEdit={item => this.onItemEdit(item)}
            onItemDelete={item => this.setModalVisible(true, () => this.deleteItem(item))}/>
          <Modal 
            isVisible={this.state.modalVisible}
            onBackButtonPress={() => this.setModalVisible(false)}>
            <View style={styles.modal}>
              <Text>Are you sure you want to delete this job?</Text>
              <View style={{ flex: 1, height: 100 }}>
                <Button
                  title='Yes'
                  onPress={this.onModalConfirm}
                />
                <Button
                  title='No'
                  onPress={() => this.setModalVisible(false)}
                />
              </View>
            </View>
        </Modal>
          </View>           
            )
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center'
  },
});

export default connect()(JobItemContainer)