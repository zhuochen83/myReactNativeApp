import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import handleLoading from './HOC/handleLoading'

class CreateDetail extends React.Component {

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

export default handleLoading(CreateDetail)
