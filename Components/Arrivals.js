import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

const Arrivals = (props) => {
  const { train, time } = props;
  return (
    <ScrollView style={styles.cards}>
      <View style={styles.container}>
        <Text style={[styles.text, {marginLeft: 10}]}>
          {train}
        </Text>
        <Text style={[styles.text, {marginRight: 10}]}>
          {time}
        </Text>
      </View>
    </ScrollView>
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
  cards: {
    backgroundColor: 'white',
    flex: 1,
    height: 60,
    borderWidth: 0.5,
    borderColor: '#8b8e93',
  },
  text: {
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 15,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default Arrivals;
