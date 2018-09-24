import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';

const getColor = line => {
  const one = ['1', '2', '3'];
  const two = ['A', 'C', 'E'];
  const three = ['N', 'R', 'Q', 'W'];
  const four = ['B', 'D', 'F', 'M'];
  const five = ['L', 'S'];
  const six = ['G'];
  const seven = ['J', 'Z'];
  const eight = ['7'];
  const nine = ['4', '5', '6'];
  if (one.includes(line)) {
    return '#f22f21';
  } else if (two.includes(line)) {
    return '#2078f1';
  } else if (three.includes(line)) {
    return '#e0dc0b';
  } else if (four.includes(line)) {
    return '#ed9d09';
  } else if (five.includes(line)) {
    return '#aaaaaa';
  } else if (six.includes(line)) {
    return '#43d62c';
  } else if (seven.includes(line)) {
    return '#915a01';
  } else if (eight.includes(line)) {
    return '#6e0ddd';
  } else if (nine.includes(line)) {
    return '#098702';
  } else {
    return '#0f98a8';
  }
};

class LinesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        'A',
        'C',
        'E',
        'N',
        'R',
        'Q',
        'W',
        'B',
        'D',
        'F',
        'M',
        'L',
        'G',
        'J',
        'Z',
        '7',
        'S',
        'SIR',
      ],
    };
  }

  static navigationOptions = {
    title: 'NYC Subway Time',
  };
  render() {
    const { lines } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.page}>
        <View style={styles.container}>
          {lines.map(line => {
            return (
              <View key={line}>
                <TouchableOpacity
                  style={[styles.buttons, { backgroundColor: getColor(line) }]}
                  onPress={() => navigate('Stations', { line, })}
                >
                  <Text
                    style={[styles.buttonText, { color: (line === 'N' || line === 'R' || line === 'Q' || line === 'W') ? "black" : "white" }]}
                  >
                    {line}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32bcf2',
    margin: 10,
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 35,
    fontWeight: 'bold',
    // color: 'white',
  },
  container: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});

export default LinesScreen;
