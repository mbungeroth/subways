import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Button } from 'react-native';
import allStops from '../data/';

const getFeedId = (line) => {
  const one = ['1','2','3','4','5','6','S'];
  const two = ['A','C','E'];
  const three = ['N','R','Q','W'];
  const four = ['B','D','F','M'];
  const five = ['L'];
  const six = ['G'];
  const seven = ['J','Z'];
  const eight = ['7'];
  if (one.includes(line)) {
    return 1;
  } else if (two.includes(line)) {
    return 26;
  } else if (three.includes(line)) {
    return 16;
  } else if (four.includes(line)) {
    return 21;
  } else if (five.includes(line)) {
    return 2;
  } else if (six.includes(line)) {
    return 31;
  } else if (seven.includes(line)) {
    return 36;
  } else if (eight.includes(line)) {
    return 51;
  } else {
    return 11;
  }
}

class StationsScreen extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress = (stationId, feed) => {
    this.props.navigation.navigate('Times', { id: stationId, feed, } )
  }
  render() {
    const { line } = this.props.navigation.state.params.line;
    const feed = getFeedId(line);
    console.log(feed)
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
                onPress={() => this.handlePress(station.stationId, feed)}
              />
            )
          })
        }
      </ScrollView>
    );
  }
}

export default StationsScreen;
