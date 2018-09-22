import React from 'react';
import { StyleSheet, Text, ScrollView} from 'react-native';

const NorthboundScreen = (props) => {
  const arrayOfStations = props.navigation.state.params.stationData;
  return (
    <ScrollView>
      <Text>
        northbound countdown timer
      </Text>
      {arrayOfStations.map(station => {
          return <Text key={station.stationId}>{station.stopName}</Text>
        })
      }
    </ScrollView>
  );
};

export default NorthboundScreen;
