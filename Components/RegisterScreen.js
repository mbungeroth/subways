import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';

class Register extends Component {
  static navigationOptions = {
    title: 'Welcome to Registration',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Welcome to the registrations page, {this.props.navigation.state.params.name}!</Text>
        <Button
        title="Go to Home"
        onPress={() =>
          navigate('Home', { name: 'Bob' })
        }
      />
      </View>
    );
  }
}

export default Register;
