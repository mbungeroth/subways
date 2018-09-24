import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, TextInput, View } from 'react-native';
import allStops from '../data/';
import StationCard from './StationCard';

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
    this.state = {
      searchText: '',
    }
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(stationId, feed, line) {
    this.props.navigation.navigate('Times', { id: stationId, feed, line} )
  }

  render() {
    const line = this.props.navigation.state.params.line;
    const feed = getFeedId(line);
    const now = new Date();
    const arrayOfStations = (now.getHours() > 6 || now.getHours() < 23) ? allStops[line].filter(station => station.night === false) : allStops[line];
    return (
      <ScrollView style={styles.page}>
        <Text style={styles.title}>
          Choose or search for your station:
        </Text>
        <View style={styles.inputContainer} keyboardShouldPersistTaps='never'>
          <TextInput
            value={this.state.searchText}
            onChangeText={(text) => this.setState({ searchText: text })}
            style={styles.searchBar}
            placeholder="enter station name"
          />
        </View>
        {arrayOfStations.filter(station => station.stopName.toLowerCase().includes(this.state.searchText.toLowerCase())).map(station => {
            return (
              <StationCard
                key={station.id}
                id={station.stationId}
                title={station.stopName}
                feed={feed}
                line={line}
                handlePress={this.handlePress}
              />
            )
          })
        }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  searchBar: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 23,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  }
});

export default StationsScreen;
