import React, {PropTypes} from 'react';
import { ActivityIndicator } from 'react-native';

export default (WrappedComponent) => (props) => {
  
    if (props.loading) {
      return <ActivityIndicator 
            style={{width: '100%', height: '100%'}}
            size='large'/>;
    } else {
      return (
        <WrappedComponent {...props} />
      );
    }
}
