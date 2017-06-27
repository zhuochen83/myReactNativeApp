import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'

export default class CreateDetail extends React.Component {

  constructor(props) {
    super(props)
    this.state = props.job || {}
  }

  render() {
    return (
      <View style={StyleSheet.container}>
        <FormLabel>Title</FormLabel>
        <FormInput
          value={this.state.title || ''}
          onChangeText={title => this.setState({title})}/>
        {/*<FormValidationMessage>Error message</FormValidationMessage>*/}
        <FormLabel>Description</FormLabel>
        <FormInput 
          value={this.state.description || ''}
          onChangeText={description => this.setState({description})}/>      

        <Button
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
