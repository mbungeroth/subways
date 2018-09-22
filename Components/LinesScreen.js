import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View} from 'react-native';
import { Button } from 'react-native';

class LinesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: ['A','C','E','B','D','F','M','N','R','Q','W','G','J','Z','L','S','1','2','3','4','5','6','7', 'SIR'],
    }
  }

  static navigationOptions = {
    title: 'NYC Subway Time',
  };
  render() {
    const { lines } = this.state;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Text>
          NYC Subway Countdown Timer:
        </Text>
        {lines.map(line => {
          return (
            <View key={line}>
              <Button
                title={`Click to go to ${line} line:`}
                onPress={() =>
                  navigate('IndividualLine', { line: {line}, })
                }
              />
            </View>
          )
        })}
      </ScrollView>
    );
  }
}

export default LinesScreen;
