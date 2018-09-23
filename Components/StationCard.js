import React from 'react';
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native';

const StationCard = (props) => {
  const { id, title, feed, line, handlePress } = props;
  return (
    <View>
      <TouchableHighlight
        style={styles.buttons}
        onPress={() => handlePress(id, feed, line)}
      >
        <View style={styles.container}>
          <Text style={styles.text}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: '#32bcf2',
    margin: 5,
    flex: 1,
    height: 40,
    borderRadius: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 7,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default StationCard;
