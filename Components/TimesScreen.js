import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from 'axios'

class NorthboundScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      northbound: [],
      southbound: [],
    }
  }

  async componentDidMount() {
    const { data:incomingNorth } = await axios.get(`http://nycsubways.herokuapp.com/api/station/${this.props.navigation.state.params.id}/N/${this.props.navigation.state.params.feed}`);
    this.setState({
      northbound: incomingNorth,
    });
    const { data:incomingSouth } = await axios.get(`http://nycsubways.herokuapp.com/api/station/${this.props.navigation.state.params.id}/S/${this.props.navigation.state.params.feed}`);
    this.setState({
      southbound: incomingSouth,
    });
  }

  render() {
    return !this.state.northbound.length && !this.state.southbound.length ? <View>loading..</View> : (
      <View>
      <Text>
        northbound trains:
      </Text>
      <ScrollView>
        {this.state.northbound.map((train, index) => {
          return (
            <Text key={index}>
              {train.train} coming in {train.time}
            </Text>
          )
        })}
      </ScrollView>
      <Text>
        southbound trains:
      </Text>
      <ScrollView>
        {this.state.southbound.map((train, index) => {
          return (
            <Text key={index}>
              {train.train} coming in {train.time}
            </Text>
          )
        })}
      </ScrollView>
    </View>
    );
  }
}

export default NorthboundScreen;
