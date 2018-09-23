import React from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

const Arrivals = (props) => {
  const { train, time, chosenLine } = props;
  return (
    <ScrollView style={[styles.cards, {backgroundColor: train === chosenLine ? 'white' : '#d8d8d8',}]}>
      <View style={styles.container}>
        <Text style={[styles.text, {marginLeft: 10, color: train === chosenLine ? 'black': '#848383',}]}>
          {train}
        </Text>
        <Text style={[styles.text, {marginRight: 10, color: train === chosenLine ? 'black': '#848383',}]}>
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
