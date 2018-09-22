import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';

const SouthboundScreen = (props) => {
  const arrayOfStations = props.navigation.state.params.stationData;
  return (
    <ScrollView>
      <Text>
        southbound countdown timer
      </Text>
      {arrayOfStations.map(station => {
          return <Text key={station.stationId}>{station.stopName}</Text>
        })
      }
    </ScrollView>
  );
};

export default SouthboundScreen;
