import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';

class IndividualLineScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { line } = this.props.navigation.state.params.line;
    return (
      <View>
        <Text>
          You are viewing the {line} line.
        </Text>
        <Button
          title={'Uptown'}
          onPress={() =>
            navigate('LineNorth', { line: {line} })
          }
        />
        <Button
          title={'Downtown'}
          onPress={() =>
            navigate('LineSouth', { line: {line} })
          }
        />
      </View>
    );
  }
}

export default IndividualLineScreen;
