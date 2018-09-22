import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import allStops from '../data/';

class StationsScreen extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress = (stationId) => {
    console.log(stationId)
    this.props.navigation.navigate('North', { id: stationId, } )
  }
  render() {
    const { line } = this.props.navigation.state.params.line;
    const arrayOfStations = allStops[line];
    return (
      <ScrollView>
        <Text>
          Stations for the {line} line:
        </Text>
        {arrayOfStations.map(station => {
            return (
              <Button
                key={station.stationId}
                title={station.stopName}
                onPress={() => this.handlePress(station.stationId)}
              />
            )
          })
        }
      </ScrollView>
    );
  }
}

export default StationsScreen;
