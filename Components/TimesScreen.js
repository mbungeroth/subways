import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableHighlight} from 'react-native';
import axios from 'axios';
import Arrivals from './Arrivals';

class TimesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      northbound: [],
      southbound: [],
      showNorth: true,
      showSouth: true,
    }
    this.fetchNorthbound = this.fetchNorthbound.bind(this);
    this.fetchSouthbound = this.fetchSouthbound.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  async componentDidMount() {
    await this.fetchNorthbound()
    await this.fetchSouthbound()
  }

  async fetchNorthbound() {
    const { data:incomingNorth } = await axios.get(`http://nycsubways.herokuapp.com/api/station/${this.props.navigation.state.params.id}/N/${this.props.navigation.state.params.feed}`);
    this.setState({
      northbound: incomingNorth,
    });
  }

  async fetchSouthbound() {
    const { data:incomingSouth } = await axios.get(`http://nycsubways.herokuapp.com/api/station/${this.props.navigation.state.params.id}/S/${this.props.navigation.state.params.feed}`);
    this.setState({
      southbound: incomingSouth,
    });
  }

  handlePress(filter) {
    if (filter === 'all') {
      this.setState({
        showNorth: true,
        showSouth: true,
      });
    } else if (filter === 'north') {
      this.setState({
        showNorth: true,
        showSouth: false,
      });
    } else {
      this.setState({
        showNorth: false,
        showSouth: true,
      })
    }
  }

  render() {
    const { showNorth, showSouth } = this.state;
    const line = this.props.navigation.state.params.line;
    return !this.state.northbound.length && !this.state.southbound.length ? <View style={styles.page}>loading..</View> : (
      <View style={styles.page}>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={styles.button}>
            <Button
              title="All"
              color="white"
              onPress={() => this.handlePress('all')}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Button
              title="Northbound"
              color="white"
              onPress={() => this.handlePress('north')}
            />
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Button
              title="Southbound"
              color="white"
              onPress={() => this.handlePress('south')}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.timesContainer}>
          <ScrollView>
            {showNorth &&
              <View>
                <Text style={styles.direction}>
                  Northbound Trains:
                </Text>
                {this.state.northbound.map((train, index) => {
                  return (
                    <Arrivals
                      key={index}
                      train={train.train}
                      time={train.time}
                      chosenLine={line}
                    />
                  )
                })}
              </View>
            }
            {showSouth &&
              <View>
                <Text style={[styles.direction, {marginTop: 20}]}>
                  Southbound Trains:
                </Text>
                {this.state.southbound.map((train, index) => {
                  return (
                    <Arrivals
                      key={index}
                      train={train.train}
                      time={train.time}
                      chosenLine={line}
                    />
                  )
                })}
              </View>
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    display: 'flex'
  },
  direction: {
    textAlign: 'center',
    fontSize: 24,
    color: '#b942f4',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    marginTop: 5,
  },
  button: {
    height: 40,
    minWidth: 50,
    backgroundColor: '#ef14ff',
    borderRadius: 2,
  },
  timesContainer: {
    flex: 11,
  }
});

export default TimesScreen;
