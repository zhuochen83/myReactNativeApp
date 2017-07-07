import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import handleLoading from './HOC/handleLoading'
// import Camera from 'react-native-camera';

class CreateDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = props.navigation.state.params ? props.navigation.state.params.job : {}
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <View>
        {/*<Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>*/}
        <FormLabel>Title</FormLabel>
        <FormInput
          autoFocus
          value={this.state.title || ''}
          returnKeyType='next'
          onChangeText={title => this.setState({title})}/>
        <FormLabel>Description</FormLabel>
        <FormInput
          multiline
          inputStyle={{height: 200}}
          value={this.state.description || ''}
          onChangeText={description => this.setState({description})}/>      
        </View>
        <Button style={styles.footer}
          onPress={() => this.props.onSubmit(this.state)}
          title={this.props.buttonText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    padding: 10
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default handleLoading(CreateDetail)
