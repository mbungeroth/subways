import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';
import allStops from '../data/';

class IndividualLineScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    const { line } = this.props.navigation.state.params.line;
    const stationStopsArray = allStops[line];
    return (
      <View>
        <Text>
          You are viewing the {line} line.
        </Text>
        <Button
          title={'Uptown'}
          onPress={() =>
            navigate('LineNorth', { stationData: stationStopsArray })
          }
        />
        <Button
          title={'Downtown'}
          onPress={() =>
            navigate('LineSouth', { stationData: stationStopsArray })
          }
        />
      </View>
    );
  }
}

export default IndividualLineScreen;
