import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from 'axios'

class NorthboundScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incoming: [],
    }
  }

  async componentDidMount() {
    const { data:incomingTrains } = await axios.get(`http://nycsubways.herokuapp.com/api/station/${this.props.navigation.state.params.id}/N`);
    this.setState({
      incoming: incomingTrains,
    });
  }

  render() {
    return !this.state.incoming.length ? <View>loading..</View> : (
      <View>
      <Text>
        northbound countdown timer:
      </Text>
      <ScrollView>
        {this.state.incoming.map((train, index) => {
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
