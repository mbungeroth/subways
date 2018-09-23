import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'NYC Subway Time',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.page}>
        <Text style={styles.title}>
          NYC Subway Countdown Timer
        </Text>
        <View >
          <TouchableHighlight
            style={styles.buttons}
          >
            <Button
              color="white"
              title="Subway Lines"
              onPress={() =>
                navigate('Lines')
              }
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttons, { backgroundColor: 'red' }]}
          >
            <Button
              color="white"
              title="Service Notices"
              onPress={() =>
                navigate('Notices')
              }
            />
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.buttons}
          >
            <Button
              color="white"
              title="Line Subscriptions"
              onPress={() =>
                navigate('Subscribe')
              }
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  page: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 180,
    flex: 1,
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: '#32bcf2',
    margin: 10,
    width: 180,
    height: 40,
    borderRadius: 10,
    marginLeft :50,
    marginRight:50,
  }
});

export default HomeScreen;


