import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Notice = (props) => {
  const { lines, type, info } = props;
  const linesAffected = lines.split('').join(', ');
  const plural = linesAffected.length > 1 ? 'lines' : 'line';
  return (
    <View>
      <Text>
        Current service notices for the {linesAffected} {plural}:
      </Text>
      <Text>{type}</Text>
      {info.reduce((infoArr, item) => {
        if (item.toLowerCase() === type.toLowerCase()) {
          return infoArr;
        } else {
          infoArr.push(item);
          return infoArr;
        }
      }, [] ).map(item => {
        return <Text>{item}</Text>
      })}
    </View>
  );
};

export default Notice;
