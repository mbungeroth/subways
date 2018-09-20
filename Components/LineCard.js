import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const LineCard = (props) => {
  const {line} = props;
  return (
    <Text>
      Line: {line}
    </Text>
  );
};

export default LineCard;
