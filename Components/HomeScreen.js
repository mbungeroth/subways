import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'NYC Subway Time',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          NYC Subway Countdown Timer
        </Text>
        <Button
          title="Subway Lines"
          onPress={() =>
            navigate('Lines')
          }
        />
        <Button
          title="Line Subscriptions"
          onPress={() =>
            navigate('Subscribe')
          }
        />
      </View>
    );
  }
}

export default HomeScreen;
