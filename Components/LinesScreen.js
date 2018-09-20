import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native';
import LineCard from './LineCard'

class LinesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: ['A','C','E','B','D','F','G','J','M','Z','S','1','2','3','4','5','6','7'],
    }
  }

  static navigationOptions = {
    title: 'NYC Subway Time',
  };
  render() {
    const { lines } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
          NYC Subway Countdown Timer:
        </Text>
        {lines.map(line => {
          return (
            <View key={line}>
              <Button
                title={`Click to go to ${line} line:`}
                onPress={() =>
                  navigate('IndividualLine', { line: {line} })
                }
              />
            </View>
          )
        })}
      </View>
    );
  }
}

export default LinesScreen;
