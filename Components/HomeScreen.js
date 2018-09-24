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
        <Text style={styles.header}>NYC</Text>
        <Text style={styles.title}>
          Subway Countdown Timer
        </Text>
        <View >
          <TouchableHighlight
            style={styles.buttons}
            onPress={() =>
              navigate('Lines')
            }
          >
            <Text style={styles.buttonText}>Subway Lines</Text>
          </TouchableHighlight>
          {/* <TouchableHighlight
            style={[styles.buttons, { backgroundColor: 'red' }]}
            onPress={() =>
              navigate('Notices')
            }
          >
            <Text style={styles.buttonText}>Service Notices</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[styles.buttons, { backgroundColor: 'green' }]}
            onPress={() =>
              navigate('Subscribe')
            }
          >
            <Text style={styles.buttonText}>Line Subscriptions</Text>
          </TouchableHighlight> */}
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
  header: {
    color: '#3f9cff',
    fontSize: 100,
    fontFamily: 'DevanagariSangamMN-Bold',
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
    width: 200,
    height: 60,
    borderRadius: 10,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
  }
});

export default HomeScreen;


