import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from 'axios';
import Arrivals from './Arrivals';

class TimesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      northbound: [],
      southbound: [],
    }
  }

  async componentDidMount() {
    const { data:incomingNorth } = await axios.get(`http://nycsubways.herokuapp.com/api/status${this.props.navigation.state.params.id}/N/${this.props.navigation.state.params.feed}`);
    this.setState({
      northbound: incomingNorth,
    });
    const { data:incomingSouth } = await axios.get(`http://nycsubways.herokuapp.com/api/station/${this.props.navigation.state.params.id}/S/${this.props.navigation.state.params.feed}`);
    this.setState({
      southbound: incomingSouth,
    });
  }

  render() {
    return !this.state.northbound.length && !this.state.southbound.length ? <View style={styles.page}>loading..</View> : (
      <View style={styles.page}>
      <Text style={styles.direction}>
        Northbound Trains:
      </Text>
      <ScrollView>
        {this.state.northbound.map((train, index) => {
          return (
            <Arrivals
              key={index}
              train={train.train}
              time={train.time}
            />
          )
        })}
      <Text style={[styles.direction, {marginTop: 20}]}>
        Southbound Trains:
      </Text>
        {this.state.southbound.map((train, index) => {
          return (
            <Arrivals
              key={index}
              train={train.train}
              time={train.time}
            />
          )
        })}
      </ScrollView>
    </View>
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
  direction: {
    textAlign: 'center',
    fontSize: 24,
    color: '#b942f4',
    fontWeight: 'bold',
    marginBottom: 5,
  }
});

export default TimesScreen;
