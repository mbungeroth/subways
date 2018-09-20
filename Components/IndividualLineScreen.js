import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

class IndividualLineScreen extends Component {
  render() {
    const { line } = this.props.navigation.state.params.line;
    return (
      <View>
        <Text>
          You are viewing the {line} line.
        </Text>
      </View>
    );
  }
}

export default IndividualLineScreen;
